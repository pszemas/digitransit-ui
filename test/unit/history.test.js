import { expect } from 'chai';
import { describe, it } from 'mocha';
import { createHistory, createMemoryHistory } from 'history';
import sinon from 'sinon';

import createRouter, { getCreateHistoryFunction } from '../../app/history';
import createLocalStorageHistory from '../../app/localStorageHistory';

describe('history', () => {
  describe('getCreateHistoryFunction', () => {
    it('should use createMemoryHistory by default', () => {
      const result = getCreateHistoryFunction();
      expect(result).to.equal(createMemoryHistory);
    });

    it('should use createHistory if in browser and sessionStorage exists', () => {
      const path = '/';
      const result = getCreateHistoryFunction(path, true);
      expect(result).to.equal(createHistory);
    });

    it('should use createMemoryHistory if in browser and sessionStorage does not exist', () => {
      const stub = sinon.stub(window, 'sessionStorage').get(() => null);
      const path = '/';
      const result = getCreateHistoryFunction(path, true);
      expect(result).to.equal(createMemoryHistory);
      stub.restore();
    });

    it('should use localStorageHistory if in iOSApp and path is root', () => {
      const path = '/';
      const result = getCreateHistoryFunction(path, true, true);
      expect(result).to.equal(createLocalStorageHistory);
    });

    it('should use createHistory if in iOSApp and path is not root', () => {
      const path = '/reitti/foo/bar';
      const result = getCreateHistoryFunction(path, true, true);
      expect(result).to.equal(createHistory);
    });
  });

  describe('default export', () => {
    it('should apply the given path if not using createHistory', () => {
      const config = {
        APP_PATH: 'foobar',
      };
      const path = '/foo/bar';
      const router = createRouter(config, path);
      expect(router.getCurrentLocation().pathname).to.equal(path);
    });
  });
});

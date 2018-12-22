import converter from 'base64-arraybuffer';

export const arrayBuffer = converter.decode(
  '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',
);

export const json = {
  header: {
    gtfs_realtime_version: '1.0',
    incrementality: 0,
    timestamp: 1544698447,
  },
  entity: [
    {
      id: '12',
      is_deleted: false,
      trip_update: null,
      vehicle: {
        trip: {
          trip_id: '',
          route_id: '32',
          direction_id: 0,
          start_time: '12:15:00',
          start_date: '20181213',
          schedule_relationship: 0,
        },
        vehicle: { id: 'TKL_003', label: '', license_plate: '' },
        position: {
          latitude: 61.477474212646484,
          longitude: 23.874494552612305,
          bearing: 0,
          odometer: 0,
          speed: 0,
        },
        current_stop_sequence: 0,
        stop_id: '',
        current_status: { value: 2, options: {} },
        timestamp: 0,
        congestion_level: 0,
        occupancy_status: 0,
      },
      alert: null,
    },
    {
      id: '30',
      is_deleted: false,
      trip_update: null,
      vehicle: {
        trip: {
          trip_id: '',
          route_id: '32',
          direction_id: 0,
          start_time: '12:20:00',
          start_date: '20181213',
          schedule_relationship: 0,
        },
        vehicle: { id: 'TKL_50', label: '', license_plate: '' },
        position: {
          latitude: 61.47600555419922,
          longitude: 23.773761749267578,
          bearing: 277,
          odometer: 0,
          speed: 0,
        },
        current_stop_sequence: 0,
        stop_id: '',
        current_status: { value: 2, options: {} },
        timestamp: 0,
        congestion_level: 0,
        occupancy_status: 0,
      },
      alert: null,
    },
    {
      id: '52',
      is_deleted: false,
      trip_update: null,
      vehicle: {
        trip: {
          trip_id: '',
          route_id: '32',
          direction_id: 0,
          start_time: '12:45:00',
          start_date: '20181213',
          schedule_relationship: 0,
        },
        vehicle: { id: 'TKL_5', label: '', license_plate: '' },
        position: {
          latitude: 61.47334671020508,
          longitude: 23.81134033203125,
          bearing: 87,
          odometer: 0,
          speed: 0,
        },
        current_stop_sequence: 0,
        stop_id: '',
        current_status: { value: 2, options: {} },
        timestamp: 0,
        congestion_level: 0,
        occupancy_status: 0,
      },
      alert: null,
    },
    {
      id: '58',
      is_deleted: false,
      trip_update: null,
      vehicle: {
        trip: {
          trip_id: '',
          route_id: '32',
          direction_id: 0,
          start_time: '12:50:00',
          start_date: '20181213',
          schedule_relationship: 0,
        },
        vehicle: { id: 'TKL_97', label: '', license_plate: '' },
        position: {
          latitude: 61.469215393066406,
          longitude: 23.869333267211914,
          bearing: 194,
          odometer: 0,
          speed: 0,
        },
        current_stop_sequence: 0,
        stop_id: '',
        current_status: { value: 2, options: {} },
        timestamp: 0,
        congestion_level: 0,
        occupancy_status: 0,
      },
      alert: null,
    },
    {
      id: '104',
      is_deleted: false,
      trip_update: null,
      vehicle: {
        trip: {
          trip_id: '',
          route_id: '5',
          direction_id: 0,
          start_time: '13:15:00',
          start_date: '20181213',
          schedule_relationship: 0,
        },
        vehicle: { id: 'TKL_19', label: '', license_plate: '' },
        position: {
          latitude: 61.45802688598633,
          longitude: 23.84658432006836,
          bearing: 0,
          odometer: 0,
          speed: 0,
        },
        current_stop_sequence: 0,
        stop_id: '',
        current_status: { value: 2, options: {} },
        timestamp: 0,
        congestion_level: 0,
        occupancy_status: 0,
      },
      alert: null,
    },
    {
      id: '105',
      is_deleted: false,
      trip_update: null,
      vehicle: {
        trip: {
          trip_id: '',
          route_id: '32',
          direction_id: 0,
          start_time: '13:15:00',
          start_date: '20181213',
          schedule_relationship: 0,
        },
        vehicle: { id: 'TKL_001', label: '', license_plate: '' },
        position: {
          latitude: 61.505401611328125,
          longitude: 23.765522003173828,
          bearing: 0,
          odometer: 0,
          speed: 0,
        },
        current_stop_sequence: 0,
        stop_id: '',
        current_status: { value: 2, options: {} },
        timestamp: 0,
        congestion_level: 0,
        occupancy_status: 0,
      },
      alert: null,
    },
  ],
};
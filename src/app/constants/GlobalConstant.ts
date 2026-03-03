   // 'GetRoles': "https://feestracking.freeprojectapi.com/api/parkSpaceRoles/get-all-roles" 
// export const GlobalConstant= {
//    LOCAL_KEY_LOGIN: 'batchuser'
// }
// export const BASE_URL={
//     BASELINK:'https://feestracking.freeprojectapi.com/api/'
// }
export const Controllers={
   PARKINGSPACES: 'parkSpaceParkingSpaces/',
   PARKCARSIZES:'parkSpaceCarSizes/',
   PARKSPACEBOOKINGS:'parkSpaceParkingBookings/',
   PARKINGIAMGES:'parkSpaceParkingSpaceImages/',
   PARKINGSPACESVIEWS:'parkSpaceParkingSpaceViews/',
   PARKINGROLES:'parkSpaceRoles/',
   PARKINGSUBSCRIPTIONSPLANS:'parkSpaceSubscriptionPlans/',
   PARKINGUSERS:'parkSpaceUsers/',
   PARKINGUSERSUBPALNS:'parkSpaceUserSubscriptions/',
   PARKINGVEHICLES:'parkSpaceVehicles/'

}
//     'GetCarSizes': 'https://feestracking.freeprojectapi.com/api/parkSpaceCarSizes/get-all-car-sizes',


export const API_METHODS ={
    CAR_POST:'create-car-size',
    CAR_GETALL:'get-all-car-sizes',
    CAR_GETBYID:'get-car-size-by-id/',
    CAR_UPDATE:'update-car-size/',
    CAR_DELETE:'delete-car-size/',
    
    PARKING_POST:'create-parking-space',
    PARKING_GETALL:'get-all-parking-spaces',
    PARKING_GETOWNER:'get-owner-parking-spaces/',
    PARKING_SEARCH:'search-parking-spaces',
    PARKING_GET_ID:'get-parking-space-by-id/',
    PARKING_UPDATE:'update-parking-space/',
    PARKING_DELETE:'delete-parking-space/',

    VEHICLE_CREATE:'create-vehicle',
    VEHICLE_GETALL:'get-all-vehicles',
    VEH_GET_BYID:'get-vehicle-by-id/',
    VEH_GET_BYUSERID:'get-vehicles-by-user/',
    VEH_DELETE:'delete-vehicle/',
    VEH_UPDATE:'update-vehicle/',

    BOOKING_CREATE:'create-booking',
    BOOKING_GETALL:'get-all-bookings',
    BOOKING_BYID:'get-booking-by-id/',
    BOOKING_CUSTOMERID:'get-bookings-by-customer/',
    BOOKING_DELETE:'delete-booking/',
    BOOKING_UPDATE:'update-booking/',

    SUB_PLANS_GETALL:'get-all-plans',

    ROLES_GETALL:'get-all-roles',
    REG_USER:'register-user',
    LOGINN:'login',

    PLANS_GETALL:'get-all-plans'

}

// export const API = {
//     BASEURL:'https://feestracking.freeprojectapi.com/api/',
//         CARSIZES: 'parkSpaceCarSizes/',
//             ACTIONS: {
//     CREATE: 'create-car-size',
//         GET: 'get-all-car-sizes',
//             GET_ID: 'get-car-size-by-id/',
//                 UPDATE: 'update-car-size/',
//                     DELETE: '/delete-car-size/'
// },
// PARKINGBOOKINGS: 'parkSpaceParkingBookings/',
//     BACTIONS: {
//     CREATE: 'create-booking',
//         GET: 'get-all-bookings',
//             GET_ID: 'get-booking-by-id/',
//                 GET_CUSTID: 'get-bookings-by-customer/',
//                     GET_PARKINGID: 'get-bookings-by-space/',
//                         PUT: 'update-booking/',
//                             DELETE: 'delete-booking/'

// },
// PS:'/parkSpaceParkingSpaces',
// PACTIONS:{
//    CREATE:'/create-parking-space',
//     GETALL:'/get-all-parking-spaces',
//     GET:'/'
// }
// }
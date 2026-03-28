import { Routes } from '@angular/router';
import { Layout } from './pages/layout/layout';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';

import { OwnerListing } from './pages/owner-listing/owner-listing';
import { SearchPlaces } from './pages/search-places/search-places';
import { ParkingSpaceDetails } from './pages/parking-space-details/parking-space-details';
import { SubscriptionPlan } from './pages/subscription-plan/subscription-plan';
import { CustomerVehicles } from './pages/customer-vehicles/customer-vehicles';
import { ParkingSpace } from './pages/parking-space/parking-space';
<<<<<<< HEAD

=======
 
>>>>>>> 60c0c0c6ce7f742edac611dd431c76a1c02fe6e7

export const routes: Routes = [
    {
        path: '',
        component: Layout,
        children: [

            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
<<<<<<< HEAD
            {
                path: 'home',
                component: Home
=======
            { 
                path:'home',
                component:Home
>>>>>>> 60c0c0c6ce7f742edac611dd431c76a1c02fe6e7
            },

            {
                path: 'about',
                component: About
            },
            {
                path: 'login',
                component: Login
            },

<<<<<<< HEAD
            {
                path: 'register',
                component: Register
            },
            {
                path: 'park-space',
                component: ParkingSpace
            },
            {
                path: 'park-space/:id',
                component: ParkingSpace
            },
            {
                path: 'owner-listing',
                component: OwnerListing
            },
            {
                path: 'find-parking',
                component: SearchPlaces
            },
            {
                path: 'parking-space-details/:parkingSpaceId',
                component: ParkingSpaceDetails
            },
            {
                path: 'my-vehicles',
                component: CustomerVehicles
            },
            {

                path: 'subscription-plan',
                component: SubscriptionPlan

            }
        ]
    }
];
=======
                    {
                        path: 'register',
                        component: Register 
                    },
                     {
                path:'park-space',
                component:ParkingSpace
            },
               {
                path:'park-space/:id',
                component:ParkingSpace
            },
            {
                path:'owner-listing',
                component:OwnerListing
            },
            {
                path:'find-parking',
                component:SearchPlaces
            },
            {
                path:'parking-space-details/:parkingSpaceId', 
                component:ParkingSpaceDetails
            },
            {
                path:'my-vehicles',
                component:CustomerVehicles
            },
            {
                path:'subscription-plans',
                component:SubscriptionPlan
            }
                ]
            }
        ];
 
>>>>>>> 60c0c0c6ce7f742edac611dd431c76a1c02fe6e7

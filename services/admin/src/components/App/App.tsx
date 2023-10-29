import React, {useState} from 'react';
import {Link, Outlet} from "react-router-dom";
import {deepMerge} from '@packages/shared/src/utils/deepMerge'

import {UserCard} from "@packages/shared/src/components/UserCard";

export const App = () => {
    deepMerge()
    return (
        <div>
            <h1>ADMIN MODULE</h1>
            <Outlet/>
            <UserCard username={'FROM ADMIN'} />

        </div>
    );
};


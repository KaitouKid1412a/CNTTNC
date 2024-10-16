import React from 'react'
import Card from '@components/Card'
import { useLocalization } from '../context/LocalizationWrapper';
import { Select } from 'antd'
import { languages } from '../constants/constants';
import Translate from '../components/Common/Translate';
import FindAJob from '../components/FindAJob/FindAJob';
import Popular from '../components/Popular/Popular';
import Jobpilot from '../components/Jobpilot/Jobpilot';
import Category from '../components/Category/Category';

export default function Home() {
    const { switchLocale } = useLocalization();

    const handleChange = (value) => {
        switchLocale(value);
    };

    return (
        <div >
            <FindAJob />
            <Popular />
            <Jobpilot />
            <Category />
        </div>
    )
}

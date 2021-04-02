import React from 'react';
import {Button} from '@material-ui/core';
import {AiOutlineSortAscending, AiOutlineSortDescending} from 'react-icons/ai';

export default function() {

    return (
        <>
            <Button>
                <AiOutlineSortAscending/>
            </Button>
            <Button>
                <AiOutlineSortDescending/>
            </Button>
        </>
    )
}
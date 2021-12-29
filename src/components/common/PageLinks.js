import React from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Button from "./Form/Button"


export default function PageLinks() {
    const { page } = useParams();
    const pageInt = parseInt(page) || 0;
    return (
        <div>
            {pageInt > 0 && <Link to={`/frontend/page/${pageInt - 1}`}>
                <Button> 
                    Prev Page 
                </Button>
            </Link>}
            <Link to={`/frontend/page/${pageInt + 1}`}>
                <Button> 
                    Next Page 
                </Button>
            </Link>
        </div>
    )
}

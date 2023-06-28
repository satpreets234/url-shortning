import React, { useState } from 'react'
import { validateFormFields } from '../../common-functions/common-functions';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { postData } from '../../api-service/api-service';
import { postNewUrl } from '../../redux/actions';

function AddUrl() {
    const [queryInput, setQueryInput] = useState({ url: '', errors: { url: '' } ,submit:false})
    const dispatch = useDispatch();
    const handleOnErrors = (fieldName, fieldValue) => {
        setQueryInput((prevState)=>({
            ...prevState,
            errors:{
                ...prevState.errors,
                [fieldName]:fieldValue
            }
        }))
    }
    const queryFormValidate = () => {
        const { url } = queryInput;
        const isUrlValid = validateFormFields('validateUrl', url);
        if (isUrlValid) {
            handleOnErrors("url", isUrlValid.message)
        }
        return (
            isUrlValid.status
        );
    }

    const handleChange =(e)=>{
        if(queryInput.submit){
            setQueryInput({ ...queryInput, url: e.target.value })
            queryFormValidate()
        }else{
            setQueryInput({ ...queryInput, url: e.target.value })
        }
    }
    const onSubmit = async (e) => {
        setQueryInput({...queryInput,submit:true})
        e.preventDefault();
        try {console.log(9);
            const isQueryInputValid = queryFormValidate();
            if (!isQueryInputValid) {
                console.log(10);
                console.log('you may enter wrong values');
                toast.error('you may enter wrong values');
            } else {
                console.log(15);
                const postUrl = await postData('url', { givenUrl: queryInput.url });
                dispatch(postNewUrl(postUrl));
                setQueryInput({...queryInput,submit:!queryInput.submit})
                toast.success('Short url generated successfully !')
            }
        } catch (error) {
            console.log(3);
            toast.error(error.message)
        }

    }
    return (
        <div>
            <main>
                <section className="w-100 d-flex flex-column justify-content-center align-items-center">
                    <h1 className="mb-2 fs-1">URL Shortener</h1>
                    <form className="w-50" onSubmit={onSubmit}>
                        <input
                            className="w-100 border border-primary p-2 mb-2 fs-3 h-25"
                            type="text"
                            placeholder="http://samplesite.com"
                            value={queryInput.url}
                            onChange={handleChange}
                        />
                        <span style={{color:'red'}}>{queryInput.errors.url && queryInput.errors.url }</span>
                        <div class="d-grid gap-2 col-6 mx-auto">
                            <button type="submit" className="btn btn-danger m-5">
                                Shorten!
                            </button>
                        </div>
                    </form>
                </section>
            </main>
        </div>
    )
}

export default AddUrl
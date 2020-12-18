import React from 'react';

export default function Form (props) {
    const { change, submit, values, disabled, error } = props;

    const onChange = evt => {
        const {name, value, type, checked } = evt.target;
        const valueUse = type === 'checkbox' ? checked: value;
        change(name, valueUse);
    }
    return(
        <form onSubmit={submit}>
            <div>
                <label>Your Name Here
                    <input 
                    name='name'
                    value={values.name}
                    type='text'
                    onChange={onChange}
                    />
                </label>
                <p>Build Your Own Pizza</p>
                <label className='size'>Choice of Size
                    <select value={values.size} onChange={onChange} name='size'>
                        <option value=''>--Select One--</option>
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value='large'>Large</option>
                        <option value='xlarge'>Extra Large</option>
                    </select>
                </label>
                <label>Pepperoni
                    <input 
                    name='pepperoni'
                    type='checkbox'
                    onChange={onChange}
                    checked={values.pepperoni}
                    />
                </label>
                <label>Sauasge
                    <input 
                    name='sausage'
                    type='checkbox'
                    onChange={onChange}
                    checked={values.sausage}
                    />
                </label>
                <label>Green Pepper
                    <input 
                    name='pepper'
                    type='checkbox'
                    onChange={onChange}
                    checked={values.pepper}
                    />
                </label>
                <label>Canadian Bacon
                    <input 
                    name='bacon'
                    value={values.bacon}
                    type='checkbox'
                    checked={onChange}
                    />
                </label>
                <label>Special Instructions
                    <input 
                    name='special'
                    value={values.special}
                    type='text'
                    placeholder='Anything else you&apos;d like to add?'
                    onChange={onChange}
                    />
                </label>
                <button disabled={disabled} >Add to Order</button>
                <div>
                    <p>{error.name}</p>
                </div>
            </div>
        </form>
    )
}
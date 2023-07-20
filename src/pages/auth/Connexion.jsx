import React from 'react'
import Header from '../layouts/Header'

export function Connexion() {
    return <>
        <Header
            title={'Connexion'}
            subtitle={'Connecter-vous'}
        />
        <div className="container py-3">
            <h1 className='text-center'>Authentification</h1>
            <form >
                <div className="row">
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Mot de passe<span className='text-danger'>*</span></label>
                        <input type="password" className="form-control" id="password" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address<span className='text-danger'>*</span></label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    </>
}

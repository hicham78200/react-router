import React from 'react'
import Header from '../layouts/Header'

export function Inscription() {
    return <>
        <Header
            title={'Inscription'}
            subtitle={'Inscrivez-vous'}
        />
        <div className="container py-3">
            <h1 className='text-center'>Formulaire d'inscription</h1>
            <form >
                <div className="row">
                    <div className="mb-3 col-md-6">
                        <label htmlFor="FirstName" className="form-label">First Name<span className='text-danger'>*</span></label>
                        <input type="type" className="form-control" id="FirstName" />
                    </div>
                    <div className="mb-3 col-md-6">
                        <label htmlFor="LastName" className="form-label">Last Name<span className='text-danger'>*</span></label>
                        <input type="type" className="form-control" id="LastName" />
                    </div>
                    <div className="mb-3 col-md-6">
                        <label htmlFor="Pays" className="form-label">Sélectionnez le pays<span className='text-danger'>*</span></label>
                        <select className="form-select" >
                            <option selected>Sélectionnez le pays</option>
                            <option value="1">France</option>
                            <option value="2">Maroc</option>
                            <option value="3">Togo</option>
                        </select>
                    </div>
                    <div className="mb-3 col-md-6">
                        <label htmlFor="Phone" className="form-label">Numero de téléphone<span className='text-danger'>*</span></label>
                        <input type="text" className="form-control" id="Phone" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address<span className='text-danger'>*</span></label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3 col-md-6">
                        <label htmlFor="password" className="form-label">Mot de passe<span className='text-danger'>*</span></label>
                        <input type="password" className="form-control" id="password" />
                    </div>
                    <div className="mb-3 col-md-6">
                        <label htmlFor="password" className="form-label">Confirmez mot de passe<span className='text-danger'>*</span></label>
                        <input type="password" className="form-control" id="password" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Objet" className="form-label">Objet du message<span className='text-danger'>*</span></label>
                        <input type="type" className="form-control" id="Objet" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Votre message<span className='text-danger'>*</span></label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    </>
}

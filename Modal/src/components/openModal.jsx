import React, {Suspense, lazy} from "react";
import {createRoot} from 'react-dom/client'

export function openModal() {
    const Modal = lazy(() => import('./ModalSettings'))
    const modalDiv = document.createElement('div')
    modalDiv.id = 'modal'
    document.body.appendChild(modalDiv)

    const root = createRoot(modalDiv)
    root.render(
        <Suspense fallback={<div>Loading...</div>}>
            <Modal root={root} title='Modal de Configuraciones' />
        </Suspense>
    )
}

export function openModalAccount() {
    const Modal = lazy(() => import('./ModalAccount'))
    const modalDiv = document.createElement('div')
    modalDiv.id = 'modalAccount'
    document.body.appendChild(modalDiv)

    const root = createRoot(modalDiv)
    root.render(
        <Suspense fallback={<div>Loading...</div>}>
            <Modal root={root} title='Modal de Account' />
        </Suspense>
    )
}
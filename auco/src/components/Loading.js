import React from 'react';
import LottieAnimation from "../Lottie";
import loadingAnim from '../assets/animations/loading.json';

const Loading = (props) => {
    return (
        <div className="position-absolute top-50 start-50 translate-middle text-center">
            <LottieAnimation lotti={loadingAnim} height={300} width={300} />
            <h2>
                Cargando...
            </h2>
        </div>
    );
}

export default Loading;
import { PropsWithChildren } from "react";

import "./FormSection.scss"

const FormSection = ({children}:PropsWithChildren) => {

    return (
        <div className="container mx-auto flex justify-center content-center h-screen">


        {children}
  
    </div>

    )


}
export default FormSection
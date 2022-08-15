import { useState } from "react";

import { CloseButton } from "../CloseButton";
import thoughtImage from "../../images/thought.svg";
import ideaImage from "../../images/idea.svg";
import bugImage from "../../images/bug.svg";
import { FeedbackTypeStep } from "./FeedbackTypeStep";
import { FeedbackContentStep } from "./FeedbackContentStep";
import { FeedbackSucessStep } from "./FeedbackSucessStep";

export const feedbacktypes = {
    BUG:{
        title: "Problema",
        image: {
            source: bugImage,
            alt: "Imagem de um Inseto "
        }
    },
    IDEA:{
        title: "Ideia",
        image: {
            source: ideaImage,
            alt: "Imagem de uma Lampada acessa"
        }
    },
    OTHER:{
        title: "Outro",
        image: {
            source: thoughtImage,
            alt: "Imagem de uma Nuvem de pensamento"
        }
    }
}
export type FeedbackType = keyof typeof feedbacktypes; 
export function WidgetForm(){
    
    const [feedbackTypeState , setfeedbackTypeState] = useState<FeedbackType | null>(null);
    const [feedbackSent, setFeedbackSent] = useState(false); 
    function handleRestartFeedback (){
        setFeedbackSent(false);
        setfeedbackTypeState(null);
    }

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            
            {
                feedbackSent ? (
                    <FeedbackSucessStep onFeedbackRestartrequested = { handleRestartFeedback } />
                ) : (
                    <>
                        {!feedbackTypeState ? (
                            <FeedbackTypeStep onFeedbackTypeChanged = {setfeedbackTypeState}/>
                                ):(
                                    <FeedbackContentStep 
                                    feedbackTypeState = {feedbackTypeState}
                                    onFeedbackRestartrequested = {handleRestartFeedback}
                                    OnfeedbackSent = {() => setFeedbackSent(true)}
                            />
                        )}
                    </>
                )
            }
            <footer className="text-xs text-neutral-400">
                <span>Feito com ♥ por <a className="underline underline-offset-2" href="https://brenno-kayan.netlify.app/" target="_blank">Brenno Kayan</a></span>
            </footer>
        </div>
    );
}
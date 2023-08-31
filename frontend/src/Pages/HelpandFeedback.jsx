import {HelpAndFeedbackComponent} from "../Components/HelpAndFeedback/HelpAndFeedbackComponent";

export function HelpandFeedback() {
    function onPressSend(){

    }
    function OnEmailChange(value){

    }
    function OnSubjectChange(value){

    }
    function OnMessageChange(value){

    }
    return (
        <><HelpAndFeedbackComponent onPressSend={onPressSend} OnMessageChange={OnMessageChange} OnEmailChange={OnEmailChange} OnSubjectChange={OnSubjectChange}/></>
    )
}
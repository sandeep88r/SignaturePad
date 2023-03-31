import { IInputs, IOutputs } from "./generated/ManifestTypes";
import {Signature,SignatureProps } from "./SignPad";
import * as React from "react";

export class PenInput1 implements ComponentFramework.ReactControl<IInputs, IOutputs> {
    private theComponent: ComponentFramework.ReactControl<IInputs, IOutputs>;
    private notifyOutputChanged: () => void;
    private value:string

    constructor() { }
 
    public init(
        context: ComponentFramework.Context<IInputs>,
        notifyOutputChanged: () => void,
        state: ComponentFramework.Dictionary
    ): void {
        this.notifyOutputChanged = notifyOutputChanged;
    }
 
    public updateView(context: ComponentFramework.Context<IInputs>): React.ReactElement {
        const defaultDataUrl = context.parameters.PenInput1.raw || ''; 
        const handleSignatureChange = (data: string) => {
            context.parameters.PenInput1.raw = data || "";
            this.value=context.parameters.PenInput1.raw;
            console.log("PenInput1 value:", context.parameters.PenInput1.raw);
            this.notifyOutputChanged();
          };
          
          return React.createElement(
            Signature,
            { name: 'Clear', onSave: handleSignatureChange,defaultDataUrl}
          );    
    }
   
    public getOutputs(): IOutputs {
        return {
            PenInput1:this.value
         };
    }
    public destroy(): void {
       
    }
}



import * as React from 'react';
import { Label} from '@fluentui/react';
import SignaturePad from 'react-signature-pad-wrapper'
import 'signature_pad';
import {BiCheckCircle} from 'react-icons/bi'

export interface SignatureProps {
  name?: string;
  onSave: (data: string) => void;
  defaultDataUrl:string;
}

export class Signature extends React.Component<SignatureProps> {
  private signaturePad: SignaturePad | null = null;

  componentDidMount() {
    if (this.signaturePad) {
      this.signaturePad.fromDataURL(this.props.defaultDataUrl);
    }
  }
     
  private handleClearClick = () => {
    if (this.signaturePad) {
      this.signaturePad.clear();
      
    }
  };
  
  private handleSaveClick = () => {
    if (this.signaturePad) {
      const data = this.signaturePad.toDataURL();
      this.props.onSave(data);
    }
  };
  public render(): React.ReactNode {
    return (
      <><div><div style={{border:"1px solid black",cursor:''}} ><SignaturePad  ref={(ref) => (this.signaturePad = ref)} /></div>
      <div style={{display:'flex',justifyContent:'space-between'}}><Label onClick={this.handleClearClick}>
        {this.props.name}
      </Label>
      <BiCheckCircle onClick={this.handleSaveClick} size={30}></BiCheckCircle></div></div>
      </>
    )
  }
}

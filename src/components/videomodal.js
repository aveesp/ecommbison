import React from 'react'
import { Button, Modal} from 'react-bootstrap';

export default class videoModal extends React.Component {
    render() {
        return (
            <>
                <Modal {...this.props} aria-labelledby="contained-modal-title-sm"
                >
                    <Modal.Body>
                            <Button onClick={this.props.onHide} className="custom-close" >
                                <i class="dl-icon-close mfp-close"></i>
                            </Button>
                            <div className="video" style={{position: "relative",paddingBottom: "56.25%",paddingTop: 25,height: 0}}>
                                <iframe src="https://www.youtube.com/watch?v=Rp19QD2XIGM" frameBorder='0' allow='autoplay; encrypted-media' allowFullScreen title='video' style={{ position: "absolute",top: 0,left: 0,width: "100%",height: "100%"}}/>
                            </div>
                    </Modal.Body>
                </Modal>
            </>
        )
    }
}

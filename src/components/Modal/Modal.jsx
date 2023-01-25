// import React, { Component } from 'react';
import React, { useEffect } from 'react';
// import { useEffect } from 'react';
import { Backdrop, ModalContent, Button } from './Modal.styled';

export const Modal = ({ currentImage: { src, alt }, close }) => {
  useEffect(() => {
    const closeByEscape = e => {
      if (e.code === 'Escape') {
        close();
      }
    };

    window.addEventListener('keydown', closeByEscape);

    return () => {
      window.removeEventListener('keydown', closeByEscape);
    };
  }, [close]);

  return (
    <Backdrop>
      <ModalContent>
        <img src={src} alt={alt} />
        <Button type="button" onClick={close}>
          Close
        </Button>
      </ModalContent>
    </Backdrop>
  );
};

// export class Modal extends Component {
//   closeByEscape = e => {
//     if (e.code === 'Escape') {
//       this.props.closeModal();
//     }
//   };

//   componentDidMount() {
//     window.addEventListener('keydown', this.closeByEscape);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.closeByEscape);
//   }

//   render() {
//     const {
//       currentImg: { src, alt },
//     } = this.props;
//     return (
//       <Backdrop>
//         <ModalContent>
//           <img src={src} alt={alt} />
//           <Button type="button" onClick={this.props.closeModal}>
//             Close
//           </Button>
//         </ModalContent>
//       </Backdrop>
//     );
//   }
// }

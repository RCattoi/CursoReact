// import { fireEvent, render, screen } from '@testing-library/react';
// import { expect, jest, test } from '@jest/globals';

// import '@testing-library/jest-dom';
// import App from '../../App';
// import Button from '../../Button';
// import Product from '../../Product';

// describe('page 1', () => {
//   it('shoulld render aplication', () => {
//     render(<App />);

//     expect(screen.getByText('tablet')).toBeInTheDocument();
//     expect(screen.getByText('smartphone')).toBeInTheDocument();
//     expect(screen.getByText('notebook')).toBeInTheDocument();
//   });
// });

// describe(
//   'Button component',
//   () => {
//     it('should create a button', async () => {
//       render(<Button texto="testing" />);
//       const btnComponent = screen.getByText('testing');
//       expect(btnComponent).toBeInTheDocument();
//     });

//     it('should change color of the button when its clicked', async () => {
//       render(<Button texto="testing" />);
//       const btnComponent = screen.getByText('testing');
//       fireEvent.click(btnComponent);
//       expect(btnComponent).toHaveStyle({ 'background-color': 'Pink' });
//     });

//     it('should render content module', async () => {
//       const data = {
//         nome: 'testName',
//         descricao: 'testDescricao',
//         preco: 'testpreco',
//         fotos: [{ src: 'testSrc' }],
//       };
//       render(<Product dados={data} />);
//       const btnComponent = screen.getByText('testName');

//       expect(btnComponent).toBeInTheDocument();
//     });

//     it('should render Product component after button is clicked', async () => {
//       const data2 = {
//         nome: 'testName',
//         descricao: 'testDescricao',
//         preco: 'testpreco',
//         fotos: [{ src: 'testSrc' }],
//       };
//       render(<App />);

//       global.fetch = jest.fn(() =>
//         Promise.resolve({
//           json: () => Promise.resolve(data2),
//         })
//       );

//       const btnComponent = screen.getByText('tablet');
//       fireEvent.click(btnComponent);
//       const headingelement = await screen.findByRole('heading');
//       screen.debug();
//       expect(headingelement).toBeInTheDocument();
//     });
//   },

//   describe('all buttons', () => {
//     it('shhould validate the existance of all buttons', async () => {
//       render(<App />);

//       const buttons = screen.getAllByRole('button');
//       expect(buttons.length).toBe(4);
//     });
//   })
// );

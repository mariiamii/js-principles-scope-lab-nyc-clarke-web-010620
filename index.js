var customerName = 'bob';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer(bestCustomer) {
  bestCustomer = 'not bob';
}

//   describe('setBestCustomer()', function() {
//     it('setBestCustomer', function() {
//       expect(window.bestCustomer).to.equal(undefined);

//       setBestCustomer();

//       expect(window.bestCustomer).to.equal('not bob');
//     });
//   });

//   describe('overwriteBestCustomer()', function() {
//     it('overwrites the best customer', function() {
//       overwriteBestCustomer('maybe bob');

//       expect(window.bestCustomer).to.equal('maybe bob');
//     });
//   });

//   describe('changeLeastFavoriteCustomer()', function() {
//     it('unsuccessfully tries to reassign the least favorite customer', function() {
//       expect(changeLeastFavoriteCustomer).to.throw('Assignment to constant variable.');
//     });
//   });
// });

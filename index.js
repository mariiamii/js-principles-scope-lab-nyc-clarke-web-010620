var customerName = 'bob';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

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

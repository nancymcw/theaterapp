// set up seats array
// altered seats array so that they have values availability set to true or false
const seats = [
  { seat: "A1", available: true },
  { seat: "A2", available: true },
  { seat: "A3", available: true },
  { seat: "A4", available: true },
  { seat: "A5", available: true },
  { seat: "A6", available: true },
  { seat: "A7", available: true },
  { seat: "A8", available: true },
  { seat: "A9", available: true },
  { seat: "A10", available: true },

  { seat: "B1", available: true },
  { seat: "B2", available: true },
  { seat: "B3", available: true },
  { seat: "B4", available: true },
  { seat: "B5", available: true },
  { seat: "B6", available: true },
  { seat: "B7", available: true },
  { seat: "B8", available: true },
  { seat: "B9", available: true },
  { seat: "B10", available: true },
  { seat: "B11", available: true },
  { seat: "B12", available: true },

  { seat: "C1", available: true },
  { seat: "C2", available: true },
  { seat: "C3", available: true },
  { seat: "C4", available: true },
  { seat: "C5", available: true },
  { seat: "C6", available: true },
  { seat: "C7", available: true },
  { seat: "C8", available: true },
  { seat: "C9", available: true },
  { seat: "C10", available: true },
  { seat: "C11", available: true },
  { seat: "C12", available: true },

  { seat: "D1", available: true },
  { seat: "D2", available: true },
  { seat: "D3", available: true },
  { seat: "D4", available: true },
  { seat: "D5", available: true },
  { seat: "D6", available: true },
  { seat: "D7", available: true },
  { seat: "D8", available: true },
  { seat: "D9", available: true },
  { seat: "D10", available: true },
  { seat: "D11", available: true },
  { seat: "D12", available: true },
  { seat: "D13", available: true },
  { seat: "D14", available: true },

  { seat: "E1", available: true },
  { seat: "E2", available: true },
  { seat: "E3", available: true },
  { seat: "E4", available: true },
  { seat: "E5", available: true },
  { seat: "E6", available: true },
  { seat: "E7", available: true },
  { seat: "E8", available: true },
  { seat: "E9", available: true },
  { seat: "E10", available: true },
  { seat: "E11", available: true },
  { seat: "E12", available: true },
  { seat: "E13", available: true },
  { seat: "E14", available: true },

  { seat: "F1", available: true },
  { seat: "F2", available: true },
  { seat: "F3", available: true },
  { seat: "F4", available: true },
  { seat: "F5", available: true },
  { seat: "F6", available: true },
  { seat: "F7", available: true },
  { seat: "F8", available: true },
  { seat: "F9", available: true },
  { seat: "F12", available: true },
  { seat: "F12", available: true },
  { seat: "F12", available: true },
  { seat: "F13", available: true },
  { seat: "F14", available: true },
];

// made function generateRowSeats to filter through seats by row
// if adding new seat rows, add seat-table to HTML and row letter to the rows array on line 98

$(document).ready(function () {
  function generateRowSeats(rowId) {
    const rowSeats = seats.filter((seat) => seat.seat.startsWith(rowId));
    rowSeats.forEach((seat) => {
      $(`#${rowId}-seats`).append(`<td class="seat">${seat.seat}</td>`);
    });
  }

  const rows = ["A", "B", "C", "D", "E", "F"];
  rows.forEach((row) => {
    generateRowSeats(row);
  });
});

// below is what I initially had, very repetitive filtering with each row getting its own td
//   const rowASeats = seats.filter((seat) => seat.seat.startsWith("A"));

//   rowASeats.forEach((seat) => {
//     $("#A-seats").append(`<td class="seat">${seat.seat}</td>`);
//   });

//   const rowBSeats = seats.filter((seat) => seat.seat.startsWith("B"));

//   rowBSeats.forEach((seat) => {
//     $("#B-seats").append(`<td class="seat">${seat.seat}</td>`);
//   });

//   const rowCSeats = seats.filter((seat) => seat.seat.startsWith("C"));

//   rowCSeats.forEach((seat) => {
//     $("#C-seats").append(`<td class="seat">${seat.seat}</td>`);
//   });

//   const rowDSeats = seats.filter((seat) => seat.seat.startsWith("D"));

//   rowDSeats.forEach((seat) => {
//     $("#D-seats").append(`<td class="seat">${seat.seat}</td>`);
//   });

//   const rowESeats = seats.filter((seat) => seat.seat.startsWith("E"));

//   rowESeats.forEach((seat) => {
//     $("#E-seats").append(`<td class="seat">${seat.seat}</td>`);
//   });

//   const rowFSeats = seats.filter((seat) => seat.seat.startsWith("F"));

//   rowFSeats.forEach((seat) => {
//     $("#F-seats").append(`<td class="seat">${seat.seat}</td>`);
//   });

//   // const rowBSeats = seats.filter((seat) => seat.seat.startsWith("B"));

//   // rowBSeats.forEach((seat) => {
//   //   $("#rowB").append(`<div class="seat-row">
//   //   <div class="seat">${seat.seat}</div>
//   //   </div>`);
//   // });
// });

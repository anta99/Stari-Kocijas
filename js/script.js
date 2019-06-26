document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.datepicker');
    M.Datepicker.init(elems, {
        format:"dd-mm-yyyy",
        showClearBtn:true,
        i18n:{
            clear:"Poništi",
            done:"Izaberi",
            cancel:"Zatvori",
            months:['Januar','Februar','Mart','April','Maj','Jun','Jul', 'Avgust','Septembar','Oktobar','Novembar','Decembar'],
            onDraw:" "
        }
    });
  });
  
  


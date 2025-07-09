
document.querySelectorAll('.qty').forEach(qty => {
    const minus = qty.querySelector('button:first-child');
    const plus = qty.querySelector('button:last-child');
    const number = qty.querySelector('span');
 
    minus.addEventListener('click', () => {
      let val = parseInt(number.textContent);
      if (val > 1) number.textContent = val - 1;
    });
 
    plus.addEventListener('click', () => {
      let val = parseInt(number.textContent);
      number.textContent = val + 1;
    });
  });
$(".reset").click(function () {
    $("input[type='text'], input[type='email'], input[type='tel']").val("");
    $(".produk-card input").val(1);
    $(".produk-card").each(function () {
    const harga = parseInt($(this).data("harga"));
    $(this).find(".harga").text("Rp" + harga.toLocaleString("id-ID"));
    });
    $("#totalHarga").hide().empty();
});

 
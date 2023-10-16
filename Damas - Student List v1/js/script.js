$(function () {
  $("#tombol-cari").hide();
  $("#keyword").on("keyup", function () {
    $(".loader").show();
    // $("#container").load("ajax/mahasiswa.php?keyword=" + $("#keyword").val());
    $.get("ajax/mahasiswa.php?keyword=" + $("#keyword").val(), function (data) {
      $("#container").html(data);
      $(".loader").hide();
    });
  });
});

/*

Hack to see what form data looks like

*/
function handleFileSelect(e) {
    console.log(e)
    let files = e.target.files;

    let f = files[0];
    let reader = new FileReader();
    reader.onload = (function(file) {
        return function(evt) {
            $('#capture-this').val(evt.target.result);
        }
    })(f);

    let x = reader.readAsText(f);

    console.log(x)
}

$(function() {
    console.log('jquery ready..');

    $('#upload-it').on('submit', function(e) {
        e.preventDefault();

        let form = $(this);
        let split = form.find('input[name="k"]').val();
        console.log('split', split)
        let parities = form.find('input[name="m"]').val();
        console.log('parities', parities)
        let url = form.attr('action');

        $.post(url, {
            k: split,
            m: parities,
        }, function(data) {
            console.log('done with post request');
            console.log('data: ', data);
        });
    });

    $('#download-it').on('submit', function(e) {
        e.preventDefault();

        let from = $(this);
        let split = form.find('input[name="k"]').val();
        console.log('split', split)
        let parities = form.find('input[name="m"]').val();
        console.log('parities', parities)
        let url = form.attr('action');

        $.get(url, {
            k: split,
            m: parities,
        }, function(data) {
            console.log('done with post request');
            console.log('data: ', data);
        });
    });

});

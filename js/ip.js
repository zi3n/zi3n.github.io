let apiKey = 'apikey';
$.getJSON('https://ipgeolocation.abstractapi.com/v1/?api_key=' + apiKey, function(data) {
    var output = JSON.parse(JSON.stringify(data, null, 2));
    console.log(output);
    var html = `
    <tr>
        <td class="px-10 py-3">IP Address</td>
        <td class="px-10 py-3">${output['ip_address']}</td>
    </tr>
    <tr>
        <td class="px-10 py-3">Continent</td>
        <td class="px-10 py-3">${output['continent']}</td>
    </tr>
    <tr>
        <td class="px-10 py-3">Country</td>
        <td class="px-10 py-3">${output['country']}</td>
    </tr>
    <tr>
        <td class="px-10 py-3">City</td>
        <td class="px-10 py-3">${output['city']}</td>
    </tr>
    <tr>
        <td class="px-10 py-3">Timezone</td>
        <td class="px-10 py-3">${output['timezone']['abbreviation']}</td>
    </tr>
    `;
    $("#tbody").append(html);
});

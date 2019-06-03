const baseUrl = window.location.protocol + '//' + window.location.hostname +
    (window.location.port ? ':' + window.location.port : '') + '/MeineApp/';
export const environment = {
    production: true,
    baseUrl: baseUrl,
    ajaxUrl: baseUrl + 'ajax/',
    newAjax: baseUrl + 'angular_ajax',
};

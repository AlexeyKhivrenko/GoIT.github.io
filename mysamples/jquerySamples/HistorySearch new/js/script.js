$(function() {

  $('.history-from__input').datepicker({
      dateFormat: "dd.mm.yy"
  });

  $('.history-to__input').datepicker({
      dateFormat: "dd.mm.yy"
  });


  var historyData = [{
        id: 1,
        date: '01.01.2017',
        currency: '100$',
        type: 'deposit',
        status: 'true',
        method: 'bonus',
        confirmDate: '15.03.17 12:48',
        requisite: 'file'
    }, {
        id: 2,
        date: '02.02.2017',
        currency: '100$',
        type: 'withdrawal',
        status: 'true',
        method: 'bonus',
        confirmDate: '15.03.17 12:48',
        requisite: 'file'
    }, {
        id: 3,
        date: '03.03.2017',
        currency: '100$',
        type: 'withdrawal',
        status: 'true',
        method: 'bonus',
        confirmDate: '15.03.17 12:48',
        requisite: 'file'
    }, {
        id: 4,
        date: '04.04.2017',
        currency: '100$',
        type: 'deposit',
        status: 'true',
        method: 'bonus',
        confirmDate: '15.03.17 12:48',
        requisite: 'file'
    }, {
        id: 5,
        date: '05.05.2017',
        currency: '100$',
        type: 'withdrawal',
        status: 'true',
        method: 'bonus',
        confirmDate: '15.03.17 12:48',
        requisite: 'file'
    }, {
        id: 6,
        date: '06.06.2017',
        currency: '100$',
        type: 'deposit',
        status: 'true',
        method: 'bonus',
        confirmDate: '15.03.17 12:48',
        requisite: 'file'
    }, {
        id: 7,
        date: '07.07.2017',
        currency: '100$',
        type: 'withdrawal',
        status: 'true',
        method: 'bonus',
        confirmDate: '15.03.17 12:48',
        requisite: 'file'
    }, {
        id: 8,
        date: '08.08.2017',
        currency: '100$',
        type: 'deposit',
        status: 'true',
        method: 'bonus',
        confirmDate: '15.03.17 12:48',
        requisite: 'file'
    }, {
        id: 9,
        date: '09.09.2017',
        currency: '100$',
        type: 'withdrawal',
        status: 'true',
        method: 'bonus',
        confirmDate: '15.03.17 12:48',
        requisite: 'file'
    }, {
        id: 10,
        date: '10.10.2017',
        currency: '100$',
        type: 'deposit',
        status: 'true',
        method: 'bonus',
        confirmDate: '15.03.17 12:48',
        requisite: 'file'
    }];

    var tmpl = $('#history-template').html().trim();
    tmpl = _.template(tmpl);

    var elementsLength, currentPage, allPages, pageNumber, elementsFrom, elementsTo, dateFrom, dateInCollection, dateTo, newHistoryData, historyFromData, historyToData, chosingDataType, chosingType;
    currentPage = $('.history-nav__current-page');
    $('.history-from__input').val("");
    $('.history-to__input').val("");
    newHistoryData = historyData;
    pageNumber = 1;
    elementsFrom = 0;

    function generateTableData() {
        elementsLength = $('.history-nav__p-el-select').val();
        allPages = Math.ceil(newHistoryData.length / elementsLength);

        if (pageNumber === 1) {
            elementsFrom = 0;
        } else {
            elementsFrom = (pageNumber - 1) * elementsLength;
        }

        if (pageNumber === allPages) {
            elementsTo = newHistoryData.length;
        } else {
            elementsTo = elementsLength * pageNumber;
        }

        if (allPages === 0) {
            currentPage.text(allPages);
        } else {
            currentPage.text(pageNumber);
        }

        $('.history-nav__all-pages').text(allPages);


        if (newHistoryData == "") {
            $('.history-table tbody').html("");
        } else {

            $('.history-table tbody').html(tmpl({
                list: newHistoryData,
                elementsTo: elementsTo,
                pageNumber: pageNumber,
                elementsFrom: elementsFrom,
            }));
        }

        newHistoryData = historyData;

    }

    function generationStringDataToDataType() {
        dateFrom = new Date($('.history-from__input').val().replace(/(\d+).(\d+).(\d+)/, '$3/$2/$1'));
        dateTo = new Date($('.history-to__input').val().replace(/(\d+).(\d+).(\d+)/, '$3/$2/$1'));
    }

    function buttonsClick() {
        $('.history-nav__ch-page-next').on('click', function(e) {
            if (pageNumber === allPages) {
                return false;
            }
            if (pageNumber !== allPages) {
                pageNumber++;
            }
            if ($('.history-from__input').val() != '') {
                generationHistoryFromData();
            }
            if ($('.history-to__input').val() != '') {
                generationHistoryToData();
            }
            selectTypeOfData();
            generateTableData();

        });


        $('.history-nav__ch-page-back').on('click', function(e) {
            if (pageNumber === 1) {
                return false;
            }
            if (pageNumber != 1){
                pageNumber--;
            }
            if ($('.history-from__input').val() != '') {
                generationHistoryFromData();
            }
            if ($('.history-to__input').val() != '') {
                generationHistoryToData();
            }
            selectTypeOfData();
            generateTableData();

        });
    }

    function cleanPageAfterSelect() {
        pageNumber = 1;
        elementsFrom = 0;
        currentPage.text(pageNumber);
    }

    function generationHistoryToData() {
        generationStringDataToDataType();

        if (dateFrom == 'Invalid Date' || dateFrom == '' || dateFrom == undefined) {
            newHistoryData = historyData;

            historyToData = _.filter(newHistoryData, function(o) {
                dateInCollection = new Date(o.date.replace(/(\d+).(\d+).(\d+)/, '$3/$2/$1'));
                if (dateInCollection <= dateTo) {
                    return o.date;
                }
            });

        } else {

            historyToData = _.filter(newHistoryData, function(o) {
                dateInCollection = new Date(o.date.replace(/(\d+).(\d+).(\d+)/, '$3/$2/$1'));
                if (dateFrom <= dateInCollection) {
                    if (dateInCollection <= dateTo) {
                        return o.date;
                    }
                }
            });

        }

        newHistoryData = historyToData;

        return newHistoryData;
    }

    function generationHistoryFromData() {
        generationStringDataToDataType();

        if (dateTo == 'Invalid Date' || dateTo == '' || dateTo == undefined) {
            newHistoryData = historyData;

            historyFromData = _.filter(newHistoryData, function(o) {
                dateInCollection = new Date(o.date.replace(/(\d+).(\d+).(\d+)/, '$3/$2/$1'));
                if (dateFrom <= dateInCollection) {
                    return o.date;
                }
            });

        } else {

            historyFromData = _.filter(newHistoryData, function(o) {
                dateInCollection = new Date(o.date.replace(/(\d+).(\d+).(\d+)/, '$3/$2/$1'));
                if (dateFrom <= dateInCollection) {
                    if (dateInCollection <= dateTo) {
                        return o.date;
                    }
                }
            });

        }

        newHistoryData = historyFromData;

        return newHistoryData;
    }

    function selectTypeOfData() {

        chosingDataType = $('.history-type__select').val();


        if (chosingDataType == 'default') {
            chosingType = _.filter(newHistoryData, function(o) {
                return o;
            });

        } else if (chosingDataType == 'deposit') {
            chosingType = _.filter(newHistoryData, {type: 'deposit' });

        } else if (chosingDataType == 'withdrawal') {
            chosingType = _.filter(newHistoryData, {type: 'withdrawal' });
        } else {
            chosingType = newHistoryData;
        }

        newHistoryData = chosingType;
        return newHistoryData;

    }

    generateTableData();
    buttonsClick();
    selectTypeOfData();

    $('.history-nav__p-el-select').change(function() {
        cleanPageAfterSelect();
        if ($('.history-from__input').val() != '') {
            generationHistoryFromData();
        }
        if ($('.history-to__input').val() != '') {
            generationHistoryToData();
        }
        selectTypeOfData();
        generateTableData();
    });

    $('.history-nav__on-page-btn').on('click', function() {
        pageNumber = Number($('.history-nav__on-page').val());
        if (pageNumber > allPages) {
            pageNumber = allPages;
        } else if ((isNaN(pageNumber)) || (typeof(pageNumber) == 'string') || (pageNumber == '') || pageNumber < 1) {
            pageNumber = 1;
        }
        if ($('.history-from__input').val() != '') {
            generationHistoryFromData();
        }
        if ($('.history-to__input').val() != '') {
            generationHistoryToData();
        }
        selectTypeOfData();
        generateTableData();
        $('.history-nav__on-page').val("");
    });

    $('.history-from__input').change(function() {

        cleanPageAfterSelect();
        generationHistoryFromData();
        selectTypeOfData();
        generateTableData();

    });

    $('.history-to__input').change(function() {

        cleanPageAfterSelect();
        generationHistoryToData();
        selectTypeOfData();
        generateTableData();

    });



    $('.history-type__select').change(function() {
        cleanPageAfterSelect();

        if ($('.history-from__input').val() != '') {
            generationHistoryFromData();
        }
        if ($('.history-to__input').val() != '') {
            generationHistoryToData();
        }

        selectTypeOfData();
        generateTableData();

    });
})

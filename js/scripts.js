(function($) {
    "use strict";
    $(document).ready(function() {
               

        /*==Left Navigation Accordion ==*/
        if ($.fn.dcAccordion) {
            $('#nav-accordion').dcAccordion({
                eventType: 'click',
                autoClose: true,
                saveState: true,
                disableLink: true,
                speed: 'slow',
                showCount: false,
                autoExpand: true,
                classExpand: 'dcjq-current-parent'
            });
        }
        $('#open').click(function() {
            $('#sidebar').addClass('hidden');
            $("#sidebar12").show();
        })
        $('#close').click(function() {
            $('#sidebar').removeClass('hidden');
            $("#sidebar12").hide();
        })
        $('.sidebar-toggle-box').click(function() {
            $('#sidebar').addClass('hidden');
            $('#sidebar12').css('width', '95px');
            $('div#closeDiv').hide();
            $('#main-content').css('margin-left', '90px');
            $("#sidebar12").show();
            $('.sidebar-toggle-box').hide();
            $('.sidebar-toggle-box1').show();
        })
        $('.sidebar-toggle-box1').click(function() {
                $('#sidebar').removeClass('hidden');
                $('#sidebar12').css('width', '24%');
                $('div#closeDiv').show();
                $('#main-content').css('margin-left', '24%');
                $("#sidebar12").hide();
                $('.sidebar-toggle-box1').hide();
                $('.sidebar-toggle-box').show();
            })
            //4th Page
        $('.firstList').click(function() {
            $('.test').css('display', 'block');
            $('.test1').css('display', 'none');
            /*$('.test2').css('display', 'none');
            $('.test3').css('display', 'none');
            $('.test4').css('display', 'none');
            $('.test5').css('display', 'none');
            $('.test6').css('display', 'none');
            $('.test7').css('display', 'none');
            $('.test8').css('display', 'none');
            $('.test9').css('display', 'none');*/
            $('.secList a').removeClass('active');
            $('.firstList a').addClass('active');
            $('.thirdList a').removeClass('active');
            $('.fourthList a').removeClass('active');
            $('.fifthList a').removeClass('active');
            $('.sixthList a').removeClass('active');
            $('.seventhList a').removeClass('active');
            $('.eightList a').removeClass('active');
            $('.ninList a').removeClass('active');
            $('.tenList a').removeClass('active');
        })

        $('#firstSubList a').click(function() {
            $('#groups').css('display', 'block');
            $('#groups1').css('display', 'none');
            $('#groups2').css('display', 'none');
        })
        $('#seccondSubList a').click(function() {
            $('#groups').css('display', 'none');
            $('#groups1').css('display', 'block');
            $('#groups2').css('display', 'none');
        })
        $('#ThirdSubList a').click(function() {
            $('#groups').css('display', 'none');
            $('#groups1').css('display', 'none');
            $('#groups2').css('display', 'block');
        })
        $('#new1').click(function() {
            $('#firstGroupSub').css('display', 'block');
            $('#secGroupSub').css('display', 'none');
            $('#thirdGroupSub').css('display', 'none');
            $('#fourthGroupSub').css('display', 'none');
        })
        $('#new2').click(function() {
            $('#firstGroupSub').css('display', 'none');
            $('#secGroupSub').css('display', 'block');
            $('#thirdGroupSub').css('display', 'none');
            $('#fourthGroupSub').css('display', 'none');
        })
        $('#new3').click(function() {
            $('#firstGroupSub').css('display', 'none');
            $('#secGroupSub').css('display', 'none');
            $('#thirdGroupSub').css('display', 'block');
            $('#fourthGroupSub').css('display', 'none');
        })
        $('#new4').click(function() {
           $('#firstGroupSub').css('display', 'none');
            $('#secGroupSub').css('display', 'none');
            $('#thirdGroupSub').css('display', 'none');
            $('#fourthGroupSub').css('display', 'block');
        })
        $('#new11').click(function() {
            $('#firstGroupSub1').css('display', 'block');
            $('#secGroupSub1').css('display', 'none');
            $('#thirdGroupSub1').css('display', 'none');
            $('#fourthGroupSub1').css('display', 'none');
        })
        $('#new21').click(function() {
            $('#firstGroupSub1').css('display', 'none');
            $('#secGroupSub1').css('display', 'block');
            $('#thirdGroupSub1').css('display', 'none');
            $('#fourthGroupSub1').css('display', 'none');
        })
        $('#new31').click(function() {
            $('#firstGroupSub1').css('display', 'none');
            $('#secGroupSub1').css('display', 'none');
            $('#thirdGroupSub1').css('display', 'block');
            $('#fourthGroupSub1').css('display', 'none');
        })
        $('#new41').click(function() {
           $('#firstGroupSub1').css('display', 'none');
            $('#secGroupSub1').css('display', 'none');
            $('#thirdGroupSub1').css('display', 'none');
            $('#fourthGroupSub1').css('display', 'block');
        })
        $('#new1252').click(function() {
            $('#firstGroupSub2252').css('display', 'block');
            $('#secGroupSub2252').css('display', 'none');
            $('#thirdGroupSub2252').css('display', 'none');
            $('#fourthGroupSub2252').css('display', 'none');
        })
        $('#new2252').click(function() {
            $('#firstGroupSub2252').css('display', 'none');
            $('#secGroupSub2252').css('display', 'block');
            $('#thirdGroupSub2252').css('display', 'none');
            $('#fourthGroupSub2252').css('display', 'none');
        })
        $('#new3252').click(function() {
            $('#firstGroupSub2252').css('display', 'none');
            $('#secGroupSub2252').css('display', 'none');
            $('#thirdGroupSub2252').css('display', 'block');
            $('#fourthGroupSub2252').css('display', 'none');
        })
        $('#new4252').click(function() {
           $('#firstGroupSub2252').css('display', 'none');
            $('#secGroupSub2252').css('display', 'none');
            $('#thirdGroupSub2252').css('display', 'none');
            $('#fourthGroupSub2252').css('display', 'block');
        })
        //2nd sidebar
        $('.secList').click(function() {
            $('.test1').css('display', 'block');
            $('.test').css('display', 'none');
            /*$('.test2').css('display', 'none');
            $('.test3').css('display', 'none');
            $('.test4').css('display', 'none');
            $('.test5').css('display', 'none');
            $('.test6').css('display', 'none');
            $('.test7').css('display', 'none');
            $('.test8').css('display', 'none');
            $('.test9').css('display', 'none');*/
            $('.secList a').addClass('active');
            $('.firstList a').removeClass('active');
            $('.thirdList a').removeClass('active');
            $('.fourthList a').removeClass('active');
            $('.fifthList a').removeClass('active');
            $('.sixthList a').removeClass('active');
            $('.seventhList a').removeClass('active');
            $('.eightList a').removeClass('active');
            $('.ninList a').removeClass('active');
            $('.tenList a').removeClass('active');
        })

        $('#firstSubList20 a').click(function() {
            $('#groups20').css('display', 'block');
            $('#groups21').css('display', 'none');
            $('#groups22').css('display', 'none');
        })
        $('#seccondSubList20 a').click(function() {
            $('#groups20').css('display', 'none');
            $('#groups21').css('display', 'block');
            $('#groups22').css('display', 'none');
        })
        $('#ThirdSubList20 a').click(function() {
            $('#groups20').css('display', 'none');
            $('#groups21').css('display', 'none');
            $('#groups22').css('display', 'block');
        })
        $('#new20').click(function() {
            $('#firstGroupSub20').css('display', 'block');
            $('#secGroupSub21').css('display', 'none');
            $('#thirdGroupSub22').css('display', 'none');
            $('#fourthGroupSub23').css('display', 'none');
        })
        $('#new25681').click(function() {
            $('#firstGroupSub20').css('display', 'none');
            $('#secGroupSub21').css('display', 'block');
            $('#thirdGroupSub22').css('display', 'none');
            $('#fourthGroupSub23').css('display', 'none');
        })
        $('#new2552').click(function() {
            $('#firstGroupSub20').css('display', 'none');
            $('#secGroupSub21').css('display', 'none');
            $('#thirdGroupSub22').css('display', 'block');
            $('#fourthGroupSub23').css('display', 'none');
        })
        $('#new23').click(function() {
           $('#firstGroupSub20').css('display', 'none');
            $('#secGroupSub21').css('display', 'none');
            $('#thirdGroupSub22').css('display', 'none');
            $('#fourthGroupSub23').css('display', 'block');
        })
        $('#new201').click(function() {
            $('#firstGroupSub200').css('display', 'block');
            $('#secGroupSub200').css('display', 'none');
            $('#thirdGroupSub200').css('display', 'none');
            $('#fourthGroupSub200').css('display', 'none');
        })
        $('#new202').click(function() {
            $('#firstGroupSub200').css('display', 'none');
            $('#secGroupSub200').css('display', 'block');
            $('#thirdGroupSub200').css('display', 'none');
            $('#fourthGroupSub200').css('display', 'none');
        })
        $('#new203').click(function() {
            $('#firstGroupSub200').css('display', 'none');
            $('#secGroupSub200').css('display', 'none');
            $('#thirdGroupSub200').css('display', 'block');
            $('#fourthGroupSub200').css('display', 'none');
        })
        $('#new204').click(function() {
           $('#firstGroupSub200').css('display', 'none');
            $('#secGroupSub200').css('display', 'none');
            $('#thirdGroupSub200').css('display', 'none');
            $('#fourthGroupSub200').css('display', 'block');
        })
        $('#new12').click(function() {
            $('#firstGroupSub2').css('display', 'block');
            $('#secGroupSub2').css('display', 'none');
            $('#thirdGroupSub2').css('display', 'none');
            $('#fourthGroupSub2').css('display', 'none');
        })
        $('#new22').click(function() {
            $('#firstGroupSub2').css('display', 'none');
            $('#secGroupSub2').css('display', 'block');
            $('#thirdGroupSub2').css('display', 'none');
            $('#fourthGroupSub2').css('display', 'none');
        })
        $('#new32').click(function() {
            $('#firstGroupSub2').css('display', 'none');
            $('#secGroupSub2').css('display', 'none');
            $('#thirdGroupSub2').css('display', 'block');
            $('#fourthGroupSub2').css('display', 'none');
        })
        $('#new42').click(function() {
           $('#firstGroupSub2').css('display', 'none');
            $('#secGroupSub2').css('display', 'none');
            $('#thirdGroupSub2').css('display', 'none');
            $('#fourthGroupSub2').css('display', 'block');
        })
        //3rd
        $('.thirdList').click(function() {
            $('.test1').css('display', 'block');
            $('.test').css('display', 'none');
            $('.firstList a').removeClass('active');
            $('.secList a').removeClass('active');
            $('.thirdList a').addClass('active');
            $('.fourthList a').removeClass('active');
            $('.fifthList a').removeClass('active');
            $('.sixthList a').removeClass('active');
            $('.seventhList a').removeClass('active');
            $('.eightList a').removeClass('active');
            $('.ninList a').removeClass('active');
            $('.tenList a').removeClass('active');
            $('.groups20').css('display','none');
            $('.groups21').css('display','none');
            $('.groups22').css('display','none');
        })
        //4th
        $('.fourthList').click(function() {
            $('.test1').css('display', 'block');
            $('.test').css('display', 'none');
            $('.firstList a').removeClass('active');
            $('.secList a').removeClass('active');
            $('.thirdList a').removeClass('active');
            $('.fourthList a').removeClass('active');
            $('.fifthList a').removeClass('active');
            $('.sixthList a').removeClass('active');
            $('.seventhList a').removeClass('active');
            $('.eightList a').removeClass('active');
            $('.ninList a').removeClass('active');
            $('.tenList a').removeClass('active');
            $('.groups20').css('display','none');
            $('.groups21').css('display','none');
            $('.groups22').css('display','none');
        })
        //5th
        $('.fifthList').click(function() {
            $('.test1').css('display', 'block');
            $('.test').css('display', 'none');
            $('.firstList a').removeClass('active');
            $('.secList a').removeClass('active');
            $('.thirdList a').removeClass('active');
            $('.fourthList a').removeClass('active');
            $('.fifthList a').removeClass('active');
            $('.sixthList a').removeClass('active');
            $('.seventhList a').removeClass('active');
            $('.eightList a').removeClass('active');
            $('.ninList a').removeClass('active');
            $('.tenList a').removeClass('active');
            $('.groups20').css('display','none');
            $('.groups21').css('display','none');
            $('.groups22').css('display','none');
        })
        //6th
        $('.sixthList').click(function() {
            $('.test1').css('display', 'block');
            $('.test').css('display', 'none');
            $('.firstList a').removeClass('active');
            $('.secList a').removeClass('active');
            $('.thirdList a').removeClass('active');
            $('.fourthList a').removeClass('active');
            $('.fifthList a').removeClass('active');
            $('.sixthList a').addClass('active');
            $('.seventhList a').removeClass('active');
            $('.eightList a').removeClass('active');
            $('.ninList a').removeClass('active');
            $('.tenList a').removeClass('active');
            $('.groups20').css('display','none');
            $('.groups21').css('display','none');
            $('.groups22').css('display','none');
        })
        //7th
        $('.seventhList').click(function() {
            $('.test1').css('display', 'block');
            $('.test').css('display', 'none');
            $('.firstList a').removeClass('active');
            $('.secList a').removeClass('active');
            $('.thirdList a').removeClass('active');
            $('.fourthList a').removeClass('active');
            $('.fifthList a').removeClass('active');
            $('.sixthList a').removeClass('active');
            $('.seventhList a').addClass('active');
            $('.eightList a').removeClass('active');
            $('.ninList a').removeClass('active');
            $('.tenList a').removeClass('active');
            $('.groups20').css('display','none');
            $('.groups21').css('display','none');
            $('.groups22').css('display','none');
        })
        //8th
        $('.eightList').click(function() {
            $('.test1').css('display', 'block');
            $('.test').css('display', 'none');
            $('.firstList a').removeClass('active');
            $('.secList a').removeClass('active');
            $('.thirdList a').removeClass('active');
            $('.fourthList a').removeClass('active');
            $('.fifthList a').removeClass('active');
            $('.sixthList a').removeClass('active');
            $('.seventhList a').removeClass('active');
            $('.eightList a').addClass('active');
            $('.ninList a').removeClass('active');
            $('.tenList a').removeClass('active');
            $('.groups20').css('display','none');
            $('.groups21').css('display','none');
            $('.groups22').css('display','none');
        })
        //9th
        $('.ninList').click(function() {
            $('.test1').css('display', 'block');
            $('.test').css('display', 'none');
            $('.firstList a').removeClass('active');
            $('.secList a').removeClass('active');
            $('.thirdList a').removeClass('active');
            $('.fourthList a').removeClass('active');
            $('.fifthList a').removeClass('active');
            $('.sixthList a').removeClass('active');
            $('.seventhList a').removeClass('active');
            $('.eightList a').removeClass('active');
            $('.ninList a').addClass('active');
            $('.tenList a').removeClass('active');
            $('.groups20').css('display','none');
            $('.groups21').css('display','none');
            $('.groups22').css('display','none');
        })
        //10th
        $('.tenList').click(function() {
            $('.test1').css('display', 'block');
            $('.test').css('display', 'none');
            $('.firstList a').removeClass('active');
            $('.secList a').removeClass('active');
            $('.thirdList a').removeClass('active');
            $('.fourthList a').removeClass('active');
            $('.fifthList a').removeClass('active');
            $('.sixthList a').removeClass('active');
            $('.seventhList a').removeClass('active');
            $('.eightList a').removeClass('active');
            $('.ninList a').removeClass('active');
            $('.tenList a').addClass('active');
            $('.groups20').css('display','none');
            $('.groups21').css('display','none');
            $('.groups22').css('display','none');
        })

         $('select').niceSelect();
        $('.forDisable').addClass('classDisable');
        $("#drivingChart").radialPieChart("init", {
            'fill': 20,
            'data': [
                { 'color': "#2DB1E4", 'perc': 11 }
            ]
        });


        // $('#drivingChart').circliful({
        //     foregroundColor: "#6cd0fe",
        //     fillColor: '#29b6f6',
        //     backgroundColor: "#fff",
        //     fontColor: '#fff',
        //      percent: 11,
        //      showPercent: 1,
        //      targetPercent: 12,
        //       text: 'Hr',
        //       textColor: '#fff'




        // });
        //  $("#drivingChart").circularloader({
        //     backgroundColor: "#29b6f6",
        //     fontColor: "#fff",
        //     progressBarColor: "#6cd0fe",
        //     progressBarBackground: "#fff",
        //      progressPercent: 11,
        //      showText: true,
        //      title: "Any Title",
        //      progressValue:'hr',
        // });



    });


})(jQuery);

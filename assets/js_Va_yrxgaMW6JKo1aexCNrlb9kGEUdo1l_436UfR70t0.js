(function ($) {


	jQuery(document).ready(function($) {
	 	

	 // 	$("h2.multiline").each(function() {
		//     var t = $(this).text();
		//     var splitT = t.split(" ");
		//     var halfIndex = Math.round(splitT.length / 3);
		//     var newText = "";
		//     for(var i = 0; i < splitT.length; i++) {
		//         if(i == halfIndex) {
		//             newText += "<span>";
		//         }
		//         newText += splitT[i] + " ";
		//     }
		//     newText += "</span>";
		//     $(this).html(newText);
		// });
		
		$("h2.multiline").each(function() {
			var spanInserted = $(this).html().toString().split(" ").join(" </span><span>");
			var wrapped = ("<span>").concat(spanInserted, "</span>");
			$(this).html(wrapped);
			var refPos = $('h2.multiline span:first-child').position().top;
			var newPos;
			$('h2.multiline span').each(function(index) {
			    newPos = $(this).position().top   
			    if (index == 0){
			       return;
			    }
			    if (newPos == refPos){
			        $(this).prepend($(this).prev().text() + " ");
			        $(this).prev().remove();
			    } 
			    refPos = newPos;
			});
		});

	 //	$('#edit-search-block-form--2').hide();

	 // $('#views-exposed-form-getlocations-bypostcode-page-1 input').keyup(function() {

	 // var empty = false;
  //       $('#edit-distance-longitude').each(function() {
  //           if ($(this).val() == '') {
  //               empty = true;
  //           }
  //       });

  //        if (empty) {
  //           $('#edit-submit-getlocations-bypostcode').attr('disabled', 'disabled');
  //       } else {
  //           $('#edit-submit-getlocations-bypostcode').removeAttr('disabled');
  //       }
  //        });
	 

	 	
	 	// $("#inputIDone,#inputIDtwo").keyup(function(){ 
   //      if($("#inputIDone").val()!="" && $("#inputIDtwo").val()!=""){ 
   //            $("#theSubmitID").fadeTo('fast', 1.0).attr("disabled", ""); 
   //              } else { 
   //            $("#theSubmitID").fadeTo('fast', .50).attr("disabled", "true"); 
   //              } 
   //      });

	 	 // $( "#views-exposed-form-getlocations-bypostcode-page-1" ).submit(function( event ) {
		  //   if $('form input.map_select_box').val() == ''
		  //      event.preventDefault();
		  //   end
		  // });

		// var pac_input = document.getElementById('edit-distance-search-field');

		// (function pacSelectFirst(input){
		//     // store the original event binding function
		//     var _addEventListener = (input.addEventListener) ? input.addEventListener : input.attachEvent;

		//     function addEventListenerWrapper(type, listener) {
		//     // Simulate a 'down arrow' keypress on hitting 'return' when no pac suggestion is selected,
		//     // and then trigger the original listener.

		//     if (type == "keydown") {
		//       var orig_listener = listener;
		//       listener = function (event) {
		//         if (event.which == 13 || event.keyCode == 13) {
		//           var suggestion_selected = $(".pac-item.pac-selected").length > 0;
		//           if(!suggestion_selected){
		//             var simulated_downarrow = $.Event("keydown", {keyCode:40, which:40})
		//             orig_listener.apply(input, [simulated_downarrow]);
		//           }
		//         }

		//         orig_listener.apply(input, [event]);
		//       };
		//     }

		//     // add the modified listener
		//     _addEventListener.apply(input, [type, listener]);
		//   }

		//   if (input.addEventListener)
		//     input.addEventListener = addEventListenerWrapper;
		//   else if (input.attachEvent)
		//     input.attachEvent = addEventListenerWrapper;

		// })(pac_input);


		// $(function(){
		//   var autocomplete = new google.maps.places.Autocomplete(pac_input);
		// });

		// function selectFirstResult() {
		// infowindow.close();
		// if ( $('.pac-selected').lenght < 0){ // this line

		// var firstResult = $(".pac-container .pac-item:first").text();
		// var geocoder = new google.maps.Geocoder();
		// geocoder.geocode({"address":firstResult }, function(results, status) {
		//     if (status == google.maps.GeocoderStatus.OK) {
		//         var lat = results[0].geometry.location.lat(),
		//             lng = results[0].geometry.location.lng(),
		//             placeName = results[0].address_components[0].long_name,
		//             latlng = new google.maps.LatLng(lat, lng);

		//         moveMarker(placeName, latlng);
		//         $("#edit-distance-search-field").val(firstResult);
		//     }
		// });
		// }   
		// }



	 // 	$("input#edit-distance-search-field").focusin(function () {

		//         $(document).keypress(function (e) {
		//             if (e.which == 13) {
		//                 //infowindow.close();
		//                 var firstResult = $(".pac-container .pac-item:first").text();
		                
		//                 var geocoder = new google.maps.Geocoder();
		//                 geocoder.geocode({"address":firstResult }, function(results, status) {
		//                     if (status == google.maps.GeocoderStatus.OK) {
		//                         $("#edit-distance-latitude").val(results[0].geometry.location.lat());
  //               				$("#edit-distance-longitude").val(results[0].geometry.location.lng());
  //               				$("#edit-distance-search-field").val(results[0].formatted_address);
		                        
		//                         moveMarker(placeName, latlng);
		//                        $("input#edit-distance-search-field").val(firstResult);
		//                     }
		//                 });
		//             }
		//         });
		// });

	});

	 



})(jQuery);;

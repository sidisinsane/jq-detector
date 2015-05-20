/*
Usage:
    <script src="js/jquery/jquery.min.js"></script>
    <script src="js/chosen/chosen.jquery.min.js"></script>
    <script src="js/jquery-ga-universal/jquery.ga-universal.js"></script>
    <script src="js/jq-detector/jq-detector.js"></script>
    <script>
    JqDetector.detect('gaUniversalEventSubmit', 'chosen');
    </script>
*/

function JqDetector () {
    // ie console.log fallback
    typeof console     == 'undefined' && (console = {});
    typeof console.log == 'undefined' && (console.log = function(){});

    // Returns "true" if jquery is loaded
    this.core = function () {
        return (typeof jQuery == 'undefined') ? false : true;
    }

    // Returns "true" if "plugin_name" is loaded
    this.plugin = function (plugin_name) {
        if (!this.core()) {
            return false;
        } else {
            return !!$.fn[plugin_name];
        }
    }

    // Converts camelCase to dash-seperated-string (lowercase)
    this.camelCaseToDash = function (string) {
        return string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    }

    // Detects if jquery and given plugin functions are loaded and adds class to html-element
    this.detect = function () {
        var root         = document.documentElement;
        var class_array  = new Array();
        var class_prefix = 'jquery';
        var class_string = '';

        if (!this.core()) {
            class_array.push('no-' + class_prefix);
        } else {
            class_array.push(class_prefix);
        }

        for(var i=0; i<arguments.length; i++) {
            var plugin_name = arguments[i];

            var plugin_class = class_prefix + '-' + this.camelCaseToDash(plugin_name);

            if (!this.plugin(plugin_name)) {
                class_array.push('no-' + plugin_class);
            } else {
                class_array.push(plugin_class);
            }
        }

        if (typeof class_array !== 'undefined' && class_array.length > 0) {
            class_string = class_array.join(' ');

            $(root).addClass(class_string);
        }

        console.log('JqDetector added following classes to the html-element: ' + class_string);
    }
};

JqDetector = new JqDetector();

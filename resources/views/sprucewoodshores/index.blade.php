@extends('master')

@section('title')
    Thomas and Ashley: Spruce Wood Shores Estate Winery
@endsection

@section('content')

    <div class="container">
        <div class="row box">

            <div class="container-fluid page-heading-section" style="">
                <h2 class="headings text-center page-heading-word">Sprucewood Shores Estate Winery</h2>
            </div>

            <div class="col-sm-4 text-center">
                <h3>Sprucewood Shores</h3>
                <a href="https://www.sprucewoodshores.com/" target="_blank" >
                    <img src="{{ asset('img/sprucewoodshores.jpg') }}" class="image img-responsive img-fluid" title="Sprucewood Shores Estate Winery" alt="Sprucewood Shores Estate Winery"/>
                    <div class="small">Sprucewood Shores Website</div>
                </a>
            </div>

            <div class="col-sm-4 text-center">

                <h3>Map and Directions</h3>
                <a href="https://www.sprucewoodshores.com/directions" target="_blank" >
                    <img src="{{ asset('img/mapanddirections.png') }}" class="image img-responsive img-fluid" title="Map and Directions" alt="Map and Directions"/>
                    <div class="small">Sprucewood Shores Maps/Directions</div>
                </a>

                <h3>Amherstburg Weather</h3>
                <a href="https://www.theweathernetwork.com/ca/weather/ontario/amherstburg?utm_campaign=WeatherWidget&utm_source=php.scweb.ca&utm_medium=234x120&utm_content=text_city" target="_blank">
                    <div id="plemx-root">
                    </div>
                    <script type="text/javascript">
                        var _plm = _plm || [];
                        _plm.push(['_btn', 94712]);
                        _plm.push(['_loc','caon0015']);
                        _plm.push(['location', document.location.host ]);
                        (function(d,e,i) {
                            if (d.getElementById(i)) return;
                            var px = d.createElement(e);
                            px.type = 'text/javascript';
                            px.async = true;
                            px.id = i;
                            px.src = ('https:' === d.location.protocol ? 'https:' : 'http:') + '//widget.twnmm.com/js/btn/pelm.js?orig=en_ca';
                            var s = d.getElementsByTagName('script')[0];

                            var py = d.createElement('link');
                            py.rel = 'stylesheet'
                            py.href = ('https:' === d.location.protocol ? 'https:' : 'http:') + '//widget.twnmm.com/styles/btn/styles.css'

                            s.parentNode.insertBefore(px, s);
                            s.parentNode.insertBefore(py, s);
                        })(document, 'script', 'plmxbtn');</script>
                    <div class="small">The Weather Network</div>
                </a>


            </div>

            <div class="col-sm-4 text-center">
                <h3>Dinner Menu</h3>
                <a href="{{ url('menu') }}">
                    <img src="{{ asset('img/menu_mini.jpg') }}" class="image img-responsive img-fluid w-80" title="Menu" alt="Menu"/>
                <div class="small">Dinner Menu</div>
                </a>
            </div>

        </div>

@endsection

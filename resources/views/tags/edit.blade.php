@section('title')
    Thomas and Ashley: Tag Control
@endsection
@section('content')
<h1>Edit Tags</h1>
<form method="POST" action="{{action ('TagController@update', $tag->id)}}">
    {{ method_field('PATCH') }}
    @include('partials.tagsForm',
    ['buttonName' => 'Update',
    'name' => $tag->name])
</form>
<br/>

@include('partials.errors')
@endsection

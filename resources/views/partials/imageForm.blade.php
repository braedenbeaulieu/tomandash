{{ csrf_field() }}


<label for="name">Image Name: </label>
<input name="name" type="text" value="{{$name}}">
<br/>
<label for="description">Image Description: </label>
<input name="description" value="{{$description}}">
<br/>
<label for="tags">Tags: </label><br/>
@foreach($tags as $t)
    <input type="checkbox" name="tags[]" value="{{$t->id}}" @if(in_array($t->id, $tagsArray)) checked @endif>{{$t->name}}
@endforeach
<br/>
<input type="submit" value="{{$buttonName}}">

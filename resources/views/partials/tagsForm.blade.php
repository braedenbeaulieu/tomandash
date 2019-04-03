<div class="container-fluid page-heading-section">
    <h2 class="headings text-center page-heading-word">Gallery</h2>
</div>
{{ csrf_field() }}
<label for="name">Tag Name: </label><input name="name" type="text" value="{{$name}}"><br/>
<input type="submit" value="{{$buttonName}}">

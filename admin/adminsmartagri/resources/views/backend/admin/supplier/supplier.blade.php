@extends('admin.admin_master')
@section('admin')

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

<div class="page-wrapper">
			<div class="page-content">
				<!--breadcrumb-->
				<div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
	<div class="breadcrumb-title pe-3">Suppliers View</div>
	<div class="ps-3">
		<nav aria-label="breadcrumb">
			<ol class="breadcrumb mb-0 p-0">
				<li class="breadcrumb-item"><a href="javascript:;"><i class="bx bx-home-alt"></i></a>
				</li>
				<li class="breadcrumb-item active" aria-current="page">Suppliers View</li>
			</ol>
		</nav>
	</div>






</div>



<!--end breadcrumb-->
<div class="container">
	<div class="main-body">
		<div class="row">
			<div class="col-lg-4">
				<div class="card">
					<div class="card-body">
						
					</div>
				</div>
			</div>

    
			<div class="col-lg-8">

            



							</div>
						</div>
					</div>
				</div>
			</div>
		</div>




    <script type="text/javascript">
	    $(document).ready(function(){
		    $('#image').change(function(e){
			    var reader = new FileReader();
			    reader.onload = function(e){
				    $('#showImage').attr('src',e.target.result);
			    }
			    reader.readAsDataURL(e.target.files['0']);
		    });
	    });	
    </script>







@endsection
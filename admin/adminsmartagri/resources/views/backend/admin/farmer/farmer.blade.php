<!-- Bootstrap CSS -->
<link href="assets/css/bootstrap.min.css" rel="stylesheet">
<link href="assets/css/app.css" rel="stylesheet">
<link href="assets/css/icons.css" rel="stylesheet">

@extends('admin.admin_master')
@section('admin')



<div class="page-wrapper">
	<div class="page-content">
		<!--breadcrumb-->
		<div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
			<div class="breadcrumb-title pe-3">Farmers View</div>
				<div class="ps-3">
					<nav aria-label="breadcrumb">
						<ol class="breadcrumb mb-0 p-0">
							<li class="breadcrumb-item"><a href="javascript:;"><i class="bx bx-home-alt"></i></a>
							</li>
							<li class="breadcrumb-item active" aria-current="page">Farmers View</li>
						</ol>
					</nav>
				</div>
			</div>
		</div>


		<div class="card radius-10">
			<div class="card-body">
				
				<div class="table-responsive">
					<table class="table align-middle mb-0">
						<thead class="table-light">
							<tr>
								<th>Email</th>
								<th>Title</th>
								<th>First Name</th>
								<th>Last Name</th>
								<th>Street-1</th>
								<th>Street-2</th>
								<th>City</th>
                                <th>Mobile No</th>
								<th>Crop</th>
                                <th>Action</th>
							</tr>
						</thead>
						<tbody>
                            @foreach ($farmer as $value)
                                
							<tr>
								<td>{{ $value->email }}</td>
								<td>{{ $value->title }}</td>
								<td>{{ $value->fname }}</td>
								<td>{{ $value->lname }}</td>
								<td>{{ $value->street1 }}</td>
								<td>{{ $value->street2 }}</td>
								<td>{{ $value->city }}</td>
								<td>{{ $value->mobileno }}</td>
                                <td>{{ $value->crop }}</td>
								<td>
									<a href="" class="btn-btn-info">Edit</a>
                                    <a href="" class="btn-btn-danger">Delete</a>
								</td>
							</tr>
							@endforeach

						</tbody>
					</table>
				</div>
			</div>
		</div>

	</div>

</div>

@endsection
import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../file-upload.service';


@Component({
	selector: 'app-file-upload',
	templateUrl: './file-upload.component.html',
	styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {


	shortLink: string = "";
	loading: boolean = false; 
	file?: File ; // Variable to store file

	constructor(private fileUploadService: FileUploadService) { }

	ngOnInit(): void {
	}


	onChange(event: any) {
		this.file = event.target.files[0];
	}

	onUpload() {
		this.loading = !this.loading;
		console.log(this.file);
		this.fileUploadService.upload(this.file).subscribe(
			(event: any) => {
				if (typeof (event) === 'object') {

					// Short link via api response
					this.shortLink = event.link;

					this.loading = false; // Flag variable
				}
			}
		);
	}
}


import { Component, OnInit } from '@angular/core';
import { ImageService } from '../services/image.service';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';

class ImageSnippet {
  pending = false;
  status = 'init';
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {
  selectedFile: ImageSnippet;
  animating = false;
  uploaded = false;
  subtitle = 'Choose a profile image';
  private readonly notifier: NotifierService;

  constructor(private imageService: ImageService, private router: Router, private notifierService: NotifierService) {
    this.notifier = notifierService;
  }

  ngOnInit() {
    this.selectedFile = new ImageSnippet(' ', null);
  }

  processFile(imageInput: any) {
    this.animating = !this.animating;
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {
      this.selectedFile = new ImageSnippet(event.target.result, file);
      this.imageService.uploadImage(this.selectedFile.file).subscribe(
        (res) => {
          this.onSuccess(res);
        },
        (error) => {
          this.onError();
        }
      );
    });
    reader.readAsDataURL(file);
  }

  private onSuccess(res) {
    this.uploaded = true;
    console.log(res);
    localStorage.setItem('avatar', res.data.Location);
    this.animating = !this.animating;
    this.notifier.notify('success', 'Profile Picture Uploaded Successfully'); // TODO: Make this notification blue
    // this.selectedFile.pending = false;
    // this.selectedFile.status = 'ok';
  }

  private onError() {
    this.animating = !this.animating;
    this.notifier.notify('error', 'Oops an error just occured', 'UploadError');
    // this.selectedFile.pending = false;
    // this.selectedFile.status = 'fail';
    // this.selectedFile.src = '';
  }

  Skip() {
    this.router.navigateByUrl('/main');
  }

  Next() {
    if (!this.uploaded) {
      this.notifier.notify('error', 'You have\'nt chosen a profile picture', 'upload');
    } else {
      this.router.navigateByUrl('/main');
    }
  }
}

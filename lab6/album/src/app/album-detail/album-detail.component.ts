import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumsService } from '../services/albums.service';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  album: any = null;
  newTitle = '';

  loading = true;
  error = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumsService: AlbumsService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumsService.getAlbumById(id).subscribe({
      next: (data) => {
        this.album = data;
        this.newTitle = data.title;
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load album';
        this.loading = false;
      }
    });
  }

  saveTitle(): void {
    if (!this.album) return;

    this.albumsService.updateAlbumTitle(this.album.id, this.newTitle).subscribe({
      next: () => (this.album.title = this.newTitle),
      error: () => (this.error = 'Failed to update title')
    });
  }

  goBack(): void {
    this.router.navigate(['/albums']);
  }

  viewPhotos(): void {
    if (!this.album) return;
    this.router.navigate(['/albums', this.album.id, 'photos']);
  }
}
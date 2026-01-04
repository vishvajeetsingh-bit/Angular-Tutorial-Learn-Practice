import { Component, HostListener, ElementRef, Renderer2 } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  imports: [RouterLink],
  templateUrl: './page-not-found.html',
  styleUrl: './page-not-found.css',
})
export class PageNotFound 
{
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    const x = e.clientX;
    const y = e.clientY;
    
    // Get the container element
    const container = this.el.nativeElement.querySelector('.not-found-container');
    
    if(container) {
      // Set CSS variables for the spotlight position
      this.renderer.setStyle(container, '--x', `${x}px`);
      this.renderer.setStyle(container, '--y', `${y}px`);

      // Calculate Eye Movement (Simple geometry to limit pupil movement)
      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const moveX = (x - centerX) / 15; // Divider controls sensitivity
      const moveY = (y - centerY) / 15;

      this.renderer.setStyle(container, '--eye-x', `${moveX}px`);
      this.renderer.setStyle(container, '--eye-y', `${moveY}px`);
    }
  }
}

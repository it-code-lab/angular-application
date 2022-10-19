import { MyDirectiveDirective } from './my-directive.directive';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

@Component({
    template: `<div id="testDiv" appMyDirective>
    Test
    </div>`
})
class TestComponent {
}

describe('MyDirectiveDirective', () => {
    let component: TestComponent;
    let fixture: ComponentFixture<TestComponent>;
    let inputEl: DebugElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestComponent, MyDirectiveDirective]
        });
        fixture = TestBed.createComponent(TestComponent);
        component = fixture.componentInstance;
        inputEl = fixture.debugElement.query(By.css('#testDiv'));
    });

    it('Directive should change the background color of the div ', () => {
        expect(inputEl.nativeElement.style.backgroundColor).toBe('yellow');
    });
});

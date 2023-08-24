export function focusOnFirstMenuItem(): void {
    const firstItem = Array.from(
      document.getElementsByClassName('bm-item')
    ).shift() as HTMLElement | undefined;
  
    if (firstItem) {
      firstItem.focus();
    }
  }
  
  export function focusOnLastMenuItem(): void {
    const lastItem = Array.from(
      document.getElementsByClassName('bm-item')
    ).pop() as HTMLElement | undefined;
  
    if (lastItem) {
      lastItem.focus();
    }
  }
  
  export function focusOnCrossButton(): void {
    const crossButton = document.getElementById('react-burger-cross-btn');
    if (crossButton) {
      crossButton.focus();
    }
  }
  
  export function focusOnMenuButton(): void {
    const menuButton = document.getElementById('react-burger-menu-btn');
    if (menuButton) {
      menuButton.focus();
    }
  }
  
  export function focusOnMenuItem(siblingType: 'nextElementSibling' | 'previousElementSibling'): void {
    if (document.activeElement?.className.includes('bm-item')) {
      const sibling = document.activeElement[siblingType] as HTMLElement | undefined;
      if (sibling) {
        sibling.focus();
      } else {
        focusOnCrossButton();
      }
    } else {
      if (siblingType === 'previousElementSibling') {
        focusOnLastMenuItem();
      } else {
        focusOnFirstMenuItem();
      }
    }
  }
  
  export function focusOnNextMenuItem(): void {
    focusOnMenuItem('nextElementSibling');
  }
  
  export function focusOnPreviousMenuItem(): void {
    focusOnMenuItem('previousElementSibling');
  }
  
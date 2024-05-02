import { animate, group, keyframes, state, style, transition, trigger } from '@angular/animations';

export const highlightedStateTrigger = trigger('highlightedState', [
  state('default', style({
    border: '2px solid #B2B6FF'
  })),
  state('highlighted', style({
    border: '4px solid #B2B6FF',
    filter: 'brightness(92%)'
  })),
  transition('default => highlighted', [
    animate('200ms ease-out', style({
      transform: 'scale(1.02)'
    })),
    animate(200)
  ])
])


export const shownStateTrigger = trigger('shownState', [
  transition(':enter', [
    style({
      opacity: 0
    }),
    animate(300, style({
      opacity: 1
    }))
  ]),
  transition(':leave', [
    animate(300, style({
      opacity: 0
    }))
  ])
])


export const checkButtonTrigger = trigger('checkButton', [
  transition('* => checked', [
    animate('400ms ease-in', style({
      transform: 'scale(0.4)'
    }))
  ])
])

export const filterTrigger = trigger('filterAnimation', [
  transition(':enter', [
    style({
      opacity: 0,
      width: 0,
    }),
    animate('1000ms cubic-bezier(.24,.99,.03,-0.3)', keyframes([
      style({
        offset: 0,
        opacity: 0,
        width: 0,
      }),
      style({
        offset: 0.8,
        opacity: 0.5,
        width: '*',
        backgroundColor: 'lightgreen'
      }),
      style({
        offset: 1,
        opacity: 1,
        width: '*',
        backgroundColor: 'lightblue'
      }),
    ]))
  ]),
  transition(':leave', [
    animate('1000ms cubic-bezier(.24,.99,.64,.25)', style({
      opacity: 0,
      width: 0
    }))
  ])
])

export const formButtonTrigger = trigger('formButton', [
  transition('invalid => valid', [
    group([
      animate(150, style({
        backgroundColor: '#63B77C',
      })),
      animate(150, style({
        transform: 'scale(1.1)',
      })),
    ]),
    animate(300, style({
      transform: 'scale(1)',
    })),
  ]),
  transition('valid => invalid', [
    group([
      animate(150, style({
        backgroundColor: '#6C757D',
      })),
      animate(150, style({
        transform: 'scale(1.1)',
      })),
    ]),
    animate(300, style({
      transform: 'scale(1)',
    })),
  ])
])

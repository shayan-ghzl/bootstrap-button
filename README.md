# bootstrap-button
bootstrap button scss include functions variables and mixin

## Variables

```
$blue: #0d6efd;
$indigo: #6610f2;
$purple: #6f42c1;
$pink: #d63384;
$red: #dc3545;
$orange: #fd7e14;
$yellow: #ffc107;
$green: #198754;
$teal: #20c997;
$cyan: #0dcaf0;

$white: #fff;
$gray-100: #f8f9fa;
$gray-200: #e9ecef;
$gray-300: #dee2e6;
$gray-400: #ced4da;
$gray-500: #adb5bd;
$gray-600: #6c757d;
$gray-700: #495057;
$gray-800: #343a40;
$gray-900: #212529;
$black: #000;

$primary: $blue;
$secondary: $gray-600;
$success: $green;
$info: $cyan;
$warning: $yellow;
$danger: $red;
$light: $gray-100;
$dark: $gray-900;

$theme-colors: (
  "primary": $primary,
  "secondary": $secondary,
  "success": $success,
  "info": $info,
  "warning": $warning,
  "danger": $danger,
  "light": $light,
  "dark": $dark,
);
$font-size-base: 1rem !default; // Assumes the browser default, typically `16px`
$line-height-base: 1.5 !default;
$component-active-bg: $primary !default;
$font-size-sm: $font-size-base * 0.875 !default;
$font-size-lg: $font-size-base * 1.25 !default;
$font-weight-normal: 400 !default;



$enable-transitions: true !default;
$enable-rounded: true !default;
$enable-button-pointers: true !default;
$enable-reduced-motion: true !default;
$link-decoration: underline !default;
$link-hover-decoration: null !default;
$link-color: $primary !default;
$link-shade-percentage: 20% !default;
$link-hover-color: shift-color($link-color, $link-shade-percentage) !default;

$border-width: 1px !default;
$border-radius: 0.375rem !default;
$border-radius-sm: 0.25rem !default;
$border-radius-lg: 0.5rem !default;

$min-contrast-ratio: 4.5 !default;
$color-contrast-light: $white !default;
$color-contrast-dark: $black !default;

$input-btn-padding-y: 0.375rem !default;
$input-btn-padding-x: 0.75rem !default;
$input-btn-font-family: null !default;
$input-btn-font-size: $font-size-base !default;
$input-btn-line-height: $line-height-base !default;

$input-btn-focus-width: 0.25rem !default;
$input-btn-focus-color-opacity: 0.25 !default;
$input-btn-focus-color: rgba($component-active-bg, $input-btn-focus-color-opacity) !default;
$input-btn-focus-blur: 0 !default;
$input-btn-focus-box-shadow: 0 0 $input-btn-focus-blur $input-btn-focus-width $input-btn-focus-color !default;

$input-btn-padding-y-sm: 0.25rem !default;
$input-btn-padding-x-sm: 0.5rem !default;
$input-btn-font-size-sm: $font-size-sm !default;

$input-btn-padding-y-lg: 0.5rem !default;
$input-btn-padding-x-lg: 1rem !default;
$input-btn-font-size-lg: $font-size-lg !default;

$input-btn-border-width: $border-width !default;

$btn-padding-y: $input-btn-padding-y;
$btn-padding-x: $input-btn-padding-x;
$btn-font-family: $input-btn-font-family;
$btn-font-size: $input-btn-font-size;
$btn-line-height: $input-btn-line-height;
$btn-white-space: null; // Set to `nowrap` to prevent text wrapping

$btn-padding-y-sm: $input-btn-padding-y-sm;
$btn-padding-x-sm: $input-btn-padding-x-sm;
$btn-font-size-sm: $input-btn-font-size-sm;

$btn-padding-y-lg: $input-btn-padding-y-lg;
$btn-padding-x-lg: $input-btn-padding-x-lg;
$btn-font-size-lg: $input-btn-font-size-lg;

$btn-border-width: $input-btn-border-width;

$btn-font-weight: $font-weight-normal;
$btn-box-shadow: inset 0 1px 0 rgba($white, 0.15), 0 1px 1px rgba($black, 0.075);
$btn-focus-width: $input-btn-focus-width;
$btn-focus-box-shadow: $input-btn-focus-box-shadow;
$btn-disabled-opacity: 0.65;
$btn-active-box-shadow: inset 0 3px 5px rgba($black, 0.125);

$btn-link-color: $link-color;
$btn-link-hover-color: $link-hover-color;
$btn-link-disabled-color: $gray-600;

// Allows for customizing button radius independently from global border radius
$btn-border-radius: $border-radius;
$btn-border-radius-sm: $border-radius-sm;
$btn-border-radius-lg: $border-radius-lg;

$btn-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
  box-shadow 0.15s ease-in-out;

$btn-hover-bg-shade-amount: 15%;
$btn-hover-bg-tint-amount: 15%;
$btn-hover-border-shade-amount: 20%;
$btn-hover-border-tint-amount: 10%;
$btn-active-bg-shade-amount: 20%;
$btn-active-bg-tint-amount: 20%;
$btn-active-border-shade-amount: 25%;
$btn-active-border-tint-amount: 10%;

$enable-gradients: false !default;
$enable-shadows: false !default;

$_luminance-list: 0.0008 0.001 0.0011 0.0013 0.0015 0.0017 0.002 0.0022 0.0025 0.0027 0.003 0.0033 0.0037 0.004 0.0044
  0.0048 0.0052 0.0056 0.006 0.0065 0.007 0.0075 0.008 0.0086 0.0091 0.0097 0.0103 0.011 0.0116 0.0123 0.013 0.0137
  0.0144 0.0152 0.016 0.0168 0.0176 0.0185 0.0194 0.0203 0.0212 0.0222 0.0232 0.0242 0.0252 0.0262 0.0273 0.0284 0.0296
  0.0307 0.0319 0.0331 0.0343 0.0356 0.0369 0.0382 0.0395 0.0409 0.0423 0.0437 0.0452 0.0467 0.0482 0.0497 0.0513 0.0529
  0.0545 0.0561 0.0578 0.0595 0.0612 0.063 0.0648 0.0666 0.0685 0.0704 0.0723 0.0742 0.0762 0.0782 0.0802 0.0823 0.0844
  0.0865 0.0887 0.0908 0.0931 0.0953 0.0976 0.0999 0.1022 0.1046 0.107 0.1095 0.1119 0.1144 0.117 0.1195 0.1221 0.1248
  0.1274 0.1301 0.1329 0.1356 0.1384 0.1413 0.1441 0.147 0.15 0.1529 0.1559 0.159 0.162 0.1651 0.1683 0.1714 0.1746
  0.1779 0.1812 0.1845 0.1878 0.1912 0.1946 0.1981 0.2016 0.2051 0.2086 0.2122 0.2159 0.2195 0.2232 0.227 0.2307 0.2346
  0.2384 0.2423 0.2462 0.2502 0.2542 0.2582 0.2623 0.2664 0.2705 0.2747 0.2789 0.2831 0.2874 0.2918 0.2961 0.3005 0.305
  0.3095 0.314 0.3185 0.3231 0.3278 0.3325 0.3372 0.3419 0.3467 0.3515 0.3564 0.3613 0.3663 0.3712 0.3763 0.3813 0.3864
  0.3916 0.3968 0.402 0.4072 0.4125 0.4179 0.4233 0.4287 0.4342 0.4397 0.4452 0.4508 0.4564 0.4621 0.4678 0.4735 0.4793
  0.4851 0.491 0.4969 0.5029 0.5089 0.5149 0.521 0.5271 0.5333 0.5395 0.5457 0.552 0.5583 0.5647 0.5711 0.5776 0.5841
  0.5906 0.5972 0.6038 0.6105 0.6172 0.624 0.6308 0.6376 0.6445 0.6514 0.6584 0.6654 0.6724 0.6795 0.6867 0.6939 0.7011
  0.7084 0.7157 0.7231 0.7305 0.7379 0.7454 0.7529 0.7605 0.7682 0.7758 0.7835 0.7913 0.7991 0.807 0.8148 0.8228 0.8308
  0.8388 0.8469 0.855 0.8632 0.8714 0.8796 0.8879 0.8963 0.9047 0.9131 0.9216 0.9301 0.9387 0.9473 0.956 0.9647 0.9734
  0.9823 0.9911 1;
$variable-prefix: bs- !default; // Deprecated in v5.2.0 for the shorter `$prefix`
$prefix: $variable-prefix !default;
$body-color: $gray-900 !default;
```
## Functions

```
@function color-contrast(
  $background,
  $color-contrast-dark: $color-contrast-dark,
  $color-contrast-light: $color-contrast-light,
  $min-contrast-ratio: $min-contrast-ratio
) {
  $foregrounds: $color-contrast-light, $color-contrast-dark, $white, $black;
  $max-ratio: 0;
  $max-ratio-color: null;

  @each $color in $foregrounds {
    $contrast-ratio: contrast-ratio($background, $color);
    @if $contrast-ratio > $min-contrast-ratio {
      @return $color;
    } @else if $contrast-ratio > $max-ratio {
      $max-ratio: $contrast-ratio;
      $max-ratio-color: $color;
    }
  }

  @warn "Found no color leading to #{$min-contrast-ratio}:1 contrast ratio against #{$background}...";

  @return $max-ratio-color;
}

@function contrast-ratio($background, $foreground: $color-contrast-light) {
  $l1: luminance($background);
  $l2: luminance(opaque($background, $foreground));

  @return if($l1 > $l2, divide($l1 + 0.05, $l2 + 0.05), divide($l2 + 0.05, $l1 + 0.05));
}

@function luminance($color) {
  $rgb: (
    "r": red($color),
    "g": green($color),
    "b": blue($color),
  );

  @each $name, $value in $rgb {
    $value: if(divide($value, 255) < 0.03928, divide(divide($value, 255), 12.92), nth($_luminance-list, $value + 1));
    $rgb: map-merge(
      $rgb,
      (
        $name: $value,
      )
    );
  }

  @return (map-get($rgb, "r") * 0.2126) + (map-get($rgb, "g") * 0.7152) + (map-get($rgb, "b") * 0.0722);
}

// Return opaque color
// opaque(#fff, rgba(0, 0, 0, .5)) => #808080
@function opaque($background, $foreground) {
  @return mix(rgba($foreground, 1), $background, opacity($foreground) * 100%);
}

// scss-docs-start color-functions
// Tint a color: mix a color with white
@function tint-color($color, $weight) {
  @return mix(white, $color, $weight);
}

// Shade a color: mix a color with black
@function shade-color($color, $weight) {
  @return mix(black, $color, $weight);
}

@function valid-radius($radius) {
  $return: ();
  @each $value in $radius {
    @if type-of($value) == number {
      $return: append($return, max($value, 0));
    } @else {
      $return: append($return, $value);
    }
  }
  @return $return;
}
@function divide($dividend, $divisor, $precision: 10) {
  $sign: if($dividend > 0 and $divisor > 0 or $dividend < 0 and $divisor < 0, 1, -1);
  $dividend: abs($dividend);
  $divisor: abs($divisor);
  @if $dividend == 0 {
    @return 0;
  }
  @if $divisor == 0 {
    @error "Cannot divide by 0";
  }
  $remainder: $dividend;
  $result: 0;
  $factor: 10;
  @while ($remainder > 0 and $precision >= 0) {
    $quotient: 0;
    @while ($remainder >= $divisor) {
      $remainder: $remainder - $divisor;
      $quotient: $quotient + 1;
    }
    $result: $result * 10 + $quotient;
    $factor: $factor * 0.1;
    $remainder: $remainder * 10;
    $precision: $precision - 1;
    @if ($precision < 0 and $remainder >= $divisor * 5) {
      $result: $result + 1;
    }
  }
  $result: $result * $factor * $sign;
  $dividend-unit: unit($dividend);
  $divisor-unit: unit($divisor);
  $unit-map: (
    "px": 1px,
    "rem": 1rem,
    "em": 1em,
    "%": 1%,
  );
  @if ($dividend-unit != $divisor-unit and map-has-key($unit-map, $dividend-unit)) {
    $result: $result * map-get($unit-map, $dividend-unit);
  }
  @return $result;
}
```
## Mixins

```

@mixin button-variant(
    $background,
    $border,
    $color: color-contrast($background),
    $hover-background:
      if(
        $color == $color-contrast-light,
        shade-color($background, $btn-hover-bg-shade-amount),
        tint-color($background, $btn-hover-bg-tint-amount)
      ),
    $hover-border:
      if(
        $color == $color-contrast-light,
        shade-color($border, $btn-hover-border-shade-amount),
        tint-color($border, $btn-hover-border-tint-amount)
      ),
    $hover-color: color-contrast($hover-background),
    $active-background:
      if(
        $color == $color-contrast-light,
        shade-color($background, $btn-active-bg-shade-amount),
        tint-color($background, $btn-active-bg-tint-amount)
      ),
    $active-border:
      if(
        $color == $color-contrast-light,
        shade-color($border, $btn-active-border-shade-amount),
        tint-color($border, $btn-active-border-tint-amount)
      ),
    $active-color: color-contrast($active-background),
    $disabled-background: $background,
    $disabled-border: $border,
    $disabled-color: color-contrast($disabled-background)
  ) {
    --#{$prefix}btn-color: #{$color};
    --#{$prefix}btn-bg: #{$background};
    --#{$prefix}btn-border-color: #{$border};
    --#{$prefix}btn-hover-color: #{$hover-color};
    --#{$prefix}btn-hover-bg: #{$hover-background};
    --#{$prefix}btn-hover-border-color: #{$hover-border};
    --#{$prefix}btn-focus-shadow-rgb: #{to-rgb(mix($color, $border, 15%))};
    --#{$prefix}btn-active-color: #{$active-color};
    --#{$prefix}btn-active-bg: #{$active-background};
    --#{$prefix}btn-active-border-color: #{$active-border};
    --#{$prefix}btn-active-shadow: #{$btn-active-box-shadow};
    --#{$prefix}btn-disabled-color: #{$disabled-color};
    --#{$prefix}btn-disabled-bg: #{$disabled-background};
    --#{$prefix}btn-disabled-border-color: #{$disabled-border};
  }
  // scss-docs-end btn-variant-mixin
  
  // scss-docs-start btn-outline-variant-mixin
  @mixin button-outline-variant(
    $color,
    $color-hover: color-contrast($color),
    $active-background: $color,
    $active-border: $color,
    $active-color: color-contrast($active-background)
  ) {
    --#{$prefix}btn-color: #{$color};
    --#{$prefix}btn-border-color: #{$color};
    --#{$prefix}btn-hover-color: #{$color-hover};
    --#{$prefix}btn-hover-bg: #{$active-background};
    --#{$prefix}btn-hover-border-color: #{$active-border};
    --#{$prefix}btn-focus-shadow-rgb: #{to-rgb($color)};
    --#{$prefix}btn-active-color: #{$active-color};
    --#{$prefix}btn-active-bg: #{$active-background};
    --#{$prefix}btn-active-border-color: #{$active-border};
    --#{$prefix}btn-active-shadow: #{$btn-active-box-shadow};
    --#{$prefix}btn-disabled-color: #{$color};
    --#{$prefix}btn-disabled-bg: transparent;
    --#{$prefix}btn-disabled-border-color: #{$color};
    --#{$prefix}gradient: none;
  }
  // scss-docs-end btn-outline-variant-mixin
  
  // scss-docs-start btn-size-mixin
  @mixin button-size($padding-y, $padding-x, $font-size, $border-radius) {
    --#{$prefix}btn-padding-y: #{$padding-y};
    --#{$prefix}btn-padding-x: #{$padding-x};
    --#{$prefix}btn-font-size: #{$font-size};
    --#{$prefix}btn-border-radius: #{$border-radius};
  }
  
  
  @mixin border-radius($radius: $border-radius, $fallback-border-radius: false) {
    @if $enable-rounded {
      border-radius: valid-radius($radius);
    } @else if $fallback-border-radius != false {
      border-radius: $fallback-border-radius;
    }
  }
  
  @mixin gradient-bg($color: null) {
    background-color: $color;
  
    @if $enable-gradients {
      background-image: var(--#{$prefix}gradient);
    }
  }
  
  @mixin box-shadow($shadow...) {
    @if $enable-shadows {
      $result: ();
  
      @each $value in $shadow {
        @if $value != null {
          $result: append($result, $value, "comma");
        }
        @if $value == none and length($shadow) > 1 {
          @warn "The keyword 'none' must be used as a single argument.";
        }
      }
  
      @if (length($result) > 0) {
        box-shadow: $result;
      }
    }
  }
  
  @mixin transition($transition...) {
    @if length($transition) == 0 {
      $transition: $transition-base;
    }
  
    @if length($transition) > 1 {
      @each $value in $transition {
        @if $value == null or $value == none {
          @warn "The keyword 'none' or 'null' must be used as a single argument.";
        }
      }
    }
  
    @if $enable-transitions {
      @if nth($transition, 1) != null {
        transition: $transition;
      }
  
      @if $enable-reduced-motion and nth($transition, 1) != null and nth($transition, 1) != none {
        @media (prefers-reduced-motion: reduce) {
          transition: none;
        }
      }
    }
  }
  
  
```
## Base Styles

```
.btn {
    // scss-docs-start btn-css-vars
    --#{$prefix}btn-padding-x: #{$btn-padding-x};
    --#{$prefix}btn-padding-y: #{$btn-padding-y};
    --#{$prefix}btn-font-family: #{$btn-font-family};
    --#{$prefix}btn-font-size: #{$btn-font-size};
    --#{$prefix}btn-font-weight: #{$btn-font-weight};
    --#{$prefix}btn-line-height: #{$btn-line-height};
    --#{$prefix}btn-color: #{$body-color};
    --#{$prefix}btn-bg: transparent;
    --#{$prefix}btn-border-width: #{$btn-border-width};
    --#{$prefix}btn-border-color: transparent;
    --#{$prefix}btn-border-radius: #{$btn-border-radius};
    --#{$prefix}btn-hover-border-color: transparent;
    --#{$prefix}btn-box-shadow: #{$btn-box-shadow};
    --#{$prefix}btn-disabled-opacity: #{$btn-disabled-opacity};
    --#{$prefix}btn-focus-box-shadow: 0 0 0 #{$btn-focus-width} rgba(var(--#{$prefix}btn-focus-shadow-rgb), 0.5);
    // scss-docs-end btn-css-vars
  
    display: inline-block;
    padding: var(--#{$prefix}btn-padding-y) var(--#{$prefix}btn-padding-x);
    font-family: var(--#{$prefix}btn-font-family);
    font-size: var(--#{$prefix}btn-font-size);
    font-weight: var(--#{$prefix}btn-font-weight);
    line-height: var(--#{$prefix}btn-line-height);
    color: var(--#{$prefix}btn-color);
    text-align: center;
    text-decoration: if($link-decoration == none, null, none);
    white-space: $btn-white-space;
    vertical-align: middle;
    cursor: if($enable-button-pointers, pointer, null);
    user-select: none;
    border: var(--#{$prefix}btn-border-width) solid var(--#{$prefix}btn-border-color);
    @include border-radius(var(--#{$prefix}btn-border-radius));
    @include gradient-bg(var(--#{$prefix}btn-bg));
    @include box-shadow(var(--#{$prefix}btn-box-shadow));
    @include transition($btn-transition);
  
    &:hover {
      color: var(--#{$prefix}btn-hover-color);
      text-decoration: if($link-hover-decoration == underline, none, null);
      background-color: var(--#{$prefix}btn-hover-bg);
      border-color: var(--#{$prefix}btn-hover-border-color);
    }
  
    .btn-check + &:hover {
      // override for the checkbox/radio buttons
      color: var(--#{$prefix}btn-color);
      background-color: var(--#{$prefix}btn-bg);
      border-color: var(--#{$prefix}btn-border-color);
    }
  
    &:focus-visible {
      color: var(--#{$prefix}btn-hover-color);
      @include gradient-bg(var(--#{$prefix}btn-hover-bg));
      border-color: var(--#{$prefix}btn-hover-border-color);
      outline: 0;
      // Avoid using mixin so we can pass custom focus shadow properly
      @if $enable-shadows {
        box-shadow: var(--#{$prefix}btn-box-shadow), var(--#{$prefix}btn-focus-box-shadow);
      } @else {
        box-shadow: var(--#{$prefix}btn-focus-box-shadow);
      }
    }
  
    .btn-check:focus-visible + & {
      border-color: var(--#{$prefix}btn-hover-border-color);
      outline: 0;
      // Avoid using mixin so we can pass custom focus shadow properly
      @if $enable-shadows {
        box-shadow: var(--#{$prefix}btn-box-shadow), var(--#{$prefix}btn-focus-box-shadow);
      } @else {
        box-shadow: var(--#{$prefix}btn-focus-box-shadow);
      }
    }
  
    .btn-check:checked + &,
    :not(.btn-check) + &:active,
    &:first-child:active,
    &.active,
    &.show {
      color: var(--#{$prefix}btn-active-color);
      background-color: var(--#{$prefix}btn-active-bg);
      // Remove CSS gradients if they're enabled
      background-image: if($enable-gradients, none, null);
      border-color: var(--#{$prefix}btn-active-border-color);
      @include box-shadow(var(--#{$prefix}btn-active-shadow));
  
      &:focus-visible {
        // Avoid using mixin so we can pass custom focus shadow properly
        @if $enable-shadows {
          box-shadow: var(--#{$prefix}btn-active-shadow), var(--#{$prefix}btn-focus-box-shadow);
        } @else {
          box-shadow: var(--#{$prefix}btn-focus-box-shadow);
        }
      }
    }
  
    &:disabled,
    &.disabled,
    fieldset:disabled & {
      color: var(--#{$prefix}btn-disabled-color);
      pointer-events: none;
      background-color: var(--#{$prefix}btn-disabled-bg);
      background-image: if($enable-gradients, none, null);
      border-color: var(--#{$prefix}btn-disabled-border-color);
      opacity: var(--#{$prefix}btn-disabled-opacity);
      @include box-shadow(none);
    }
  }
  
  @each $color, $value in $theme-colors {
    .btn-#{$color} {
      @if $color == "light" {
        @include button-variant(
          $value,
          $value,
          $hover-background: shade-color($value, $btn-hover-bg-shade-amount),
          $hover-border: shade-color($value, $btn-hover-border-shade-amount),
          $active-background: shade-color($value, $btn-active-bg-shade-amount),
          $active-border: shade-color($value, $btn-active-border-shade-amount)
        );
      } @else if $color == "dark" {
        @include button-variant(
          $value,
          $value,
          $hover-background: tint-color($value, $btn-hover-bg-tint-amount),
          $hover-border: tint-color($value, $btn-hover-border-tint-amount),
          $active-background: tint-color($value, $btn-active-bg-tint-amount),
          $active-border: tint-color($value, $btn-active-border-tint-amount)
        );
      } @else {
        @include button-variant($value, $value);
      }
    }
  }
  
  @each $color, $value in $theme-colors {
    .btn-outline-#{$color} {
      @include button-outline-variant($value);
    }
  }
  
  .btn-link {
    --#{$prefix}btn-font-weight: #{$font-weight-normal};
    --#{$prefix}btn-color: #{$btn-link-color};
    --#{$prefix}btn-bg: transparent;
    --#{$prefix}btn-border-color: transparent;
    --#{$prefix}btn-hover-color: #{$btn-link-hover-color};
    --#{$prefix}btn-hover-border-color: transparent;
    --#{$prefix}btn-active-color: #{$btn-link-hover-color};
    --#{$prefix}btn-active-border-color: transparent;
    --#{$prefix}btn-disabled-color: #{$btn-link-disabled-color};
    --#{$prefix}btn-disabled-border-color: transparent;
    --#{$prefix}btn-box-shadow: none;
    --#{$prefix}btn-focus-shadow-rgb: #{to-rgb(mix(color-contrast($primary), $primary, 15%))};
  
    text-decoration: $link-decoration;
    @if $enable-gradients {
      background-image: none;
    }
  
    &:hover,
    &:focus-visible {
      text-decoration: $link-hover-decoration;
    }
  
    &:focus-visible {
      color: var(--#{$prefix}btn-color);
    }
  
    &:hover {
      color: var(--#{$prefix}btn-hover-color);
    }
  
    // No need for an active state here
  }
  
  .btn-lg {
    @include button-size($btn-padding-y-lg, $btn-padding-x-lg, $btn-font-size-lg, $btn-border-radius-lg);
  }
  
  .btn-sm {
    @include button-size($btn-padding-y-sm, $btn-padding-x-sm, $btn-font-size-sm, $btn-border-radius-sm);
  }
  
```

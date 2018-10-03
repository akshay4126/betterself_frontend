<template>
  <div class="textarea-wrapper">
    <textarea class="textarea-input"
              :maxlength="maxLength"
              :placeholder="placeholder"
              :value="value"
              @input="$emit('input', $event.target.value)"
              :style="{'height':height, 'width':width}"
              :class="{'error-field': fieldError}"
    >

        </textarea>
  </div>
</template>

<script>
  export default {
    props:{
      value: {
        type: String
      },
      maxLength: {
        type: Number,
      },
      width: {
        type: String,
      },
      height: {
        type: String,
        default: '98px'
      },
      label: {
        type: String,
      },
      fieldError: {
        type: Boolean,
        default: false
      },
      placeholder: {
        type: String
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import "../../scss/var";
  @import "../../scss/mixins";
  $errorColor: #c835a9;

  .textarea-wrapper{
    position: relative;

    ::-webkit-scrollbar {
      width: 7px;
    }

    ::-webkit-scrollbar-thumb {
      opacity: 0.8;
      border-radius: 5px;
    }
  }


  .textarea-title{
    display: flex;
    justify-content: space-between;
  }

  .textarea-label{
    font-weight: 700;
    font-size: 12px;
    text-align: left;
    display: block;
    margin-bottom: 4px;
    font-family: 'Source Sans Pro', sans-serif;

  }
  .textarea-length{
    @include font-source-sans(9px, $text-black, 500);
  }

  .textarea-input{
    width: 100%;
    border-radius: 12px;
    font-size: 14px;
    @include bcg-color-with-opacity($text_blue, 0.05);
    border: none;

    &:focus{

    }
    resize: none;
    outline: none;
    padding: 16px;
  }

  .error-field{
    border:2px solid $errorColor !important;
  }

</style>

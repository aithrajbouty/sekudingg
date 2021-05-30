<template>
  <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container">
            <div class="container-fluid">
            <div>
            <b-dropdown id="dropdown-1" text="Sort" class="m-md-3">
                <b-dropdown-item>First Action</b-dropdown-item>
                <b-dropdown-item>Second Action</b-dropdown-item>
                <b-dropdown-item>Third Action</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item active>Active action</b-dropdown-item>
                <b-dropdown-item disabled>Disabled action</b-dropdown-item>
            </b-dropdown>
            </div>

            <div>
            <b-dropdown id="dropdown-1" text="Filter" class="m-md-3">
                <b-dropdown-item>First Action</b-dropdown-item>
                <b-dropdown-item>Second Action</b-dropdown-item>
                <b-dropdown-item>Third Action</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item active>Active action</b-dropdown-item>
                <b-dropdown-item disabled>Disabled action</b-dropdown-item>
            </b-dropdown>
            </div>


            <div>
            <b-navbar type="light" variant="light">
                <b-nav-form>
                <b-form-input class="mr-sm-2" placeholder="Search"></b-form-input>
                <b-button variant="outline-success" class="my-2 my-sm-0" type="submit">Search</b-button>
                </b-nav-form>
            </b-navbar>
            </div>

        </div>
      </div>
  </nav>
</template>

<script>
export default {
    name : 'NavbarModule'
}
</script>

<style>

</style>
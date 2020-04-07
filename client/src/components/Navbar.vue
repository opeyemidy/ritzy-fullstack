<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark" fixed="top">
      <b-navbar-brand to="/">Ritzy Store</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->

        <b-navbar-nav class="ml-auto">
          <div class="d-sm-block d-md-none">
            <b-nav-item-dropdown text="Categories" right>
              <b-dropdown-item
                v-for="category in categories"
                :key="category.title"
                href="#"
                >{{ category.title }}</b-dropdown-item
              >
            </b-nav-item-dropdown>
          </div>
          <div class="d-lg-none">
            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template v-slot:button-content>
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </div>
          <b-nav-form class="mr-5">
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit"
              >Search</b-button
            >
          </b-nav-form>
          <b-nav-item-dropdown right class="d-none d-lg-block">
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <b-img
                v-bind="mainProps"
                rounded="circle"
                fluid
                src="https://picsum.photos/250/250/?image=54"
                alt="Image 1"
              ></b-img>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
  props: {
    categories: Array
  },
  data() {
    return {
      mainProps: {
        width: 20,
        height: 20,
        class: 'm1'
      }
    }
  }
}
</script>

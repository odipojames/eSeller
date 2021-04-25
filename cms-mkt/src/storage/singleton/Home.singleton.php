<?php
 return array (
  'name' => 'Home',
  'label' => 'home',
  '_id' => 'Home5f38d9b2033b1',
  'fields' => 
  array (
    0 => 
    array (
      'name' => 'banner',
      'label' => '',
      'type' => 'set',
      'default' => '',
      'info' => '',
      'group' => '',
      'localize' => false,
      'options' => 
      array (
        'fields' => 
        array (
          0 => 
          array (
            'type' => 'text',
            'name' => 'Title banner',
            'label' => 'title banner',
          ),
          1 => 
          array (
            'type' => 'image',
            'name' => 'banner image',
            'label' => 'banner image',
          ),
        ),
      ),
      'width' => '1-1',
      'lst' => true,
      'acl' => 
      array (
      ),
    ),
    1 => 
    array (
      'name' => 'flash_sale',
      'label' => 'Flash sales',
      'type' => 'set',
      'default' => '',
      'info' => '',
      'group' => '',
      'localize' => false,
      'options' => 
      array (
        'fields' => 
        array (
          0 => 
          array (
            'name' => 'title',
            'type' => 'text',
            'label' => 'Title that will appear on this section',
          ),
          1 => 
          array (
            'type' => 'repeater',
            'name' => 'flash_sales',
            'label' => 'Flash Sales',
            'options' => 
            array (
              'limit' => 3,
              'field' => 
              array (
                'type' => 'set',
                'label' => 'Flash Sales',
                'options' => 
                array (
                  'fields' => 
                  array (
                    0 => 
                    array (
                      'name' => 'percentage off',
                      'type' => 'text',
                      'label' => 'percentage off',
                      'info' => 'percantage off will apper on flash sale card',
                    ),
                    1 => 
                    array (
                      'name' => 'description',
                      'label' => 'Brief description of product',
                      'type' => 'text',
                      'info' => 'Brief description of product',
                    ),
                    2 => 
                    array (
                      'name' => 'background_image',
                      'type' => 'asset',
                      'label' => 'Background Image',
                      'info' => 'Background Image',
                      'required' => true,
                    ),
                  ),
                ),
              ),
            ),
          ),
        ),
      ),
      'width' => '1-1',
      'lst' => true,
      'acl' => 
      array (
      ),
    ),
  ),
  'template' => '',
  'data' => NULL,
  '_created' => 1597561266,
  '_modified' => 1597857455,
  'description' => '',
  'acl' => 
  array (
  ),
);
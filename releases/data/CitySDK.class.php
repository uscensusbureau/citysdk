<?php
$server = $_SERVER['SERVER_NAME'];
require_once (UTIL_DIR . 'Facade' . DS . 'Facade.class.php');

/**
 * CitySDK API Controller
 * 
 * This is the core contoller logic and facade implementation for the QuickFacts 
 * API. This API is intended to support the QuickFacts redesign project that is 
 * part of the Web Transformation project.
 * 
 * @author Dave Benton <david.a.benton.jr@census.gov>
 * @version 1.0.0
 * @todo Potential enhancements to the QuickFacts API Controller
 *     - none at the moment
 */
class CitySDK extends Facade {
  /**
   * QuickFacts constructor
   * 
   * This method fires the parent (Facade) constructor. That constructor handles
   * pretty much all of the dirty work.
   * 
   * @access public
   * @param void
   * @return void
   * @throws Exception 
   */
  public function __construct () {
    // Trigger the Facade constructor. This does most of our heavy lifting.
    parent::__construct();
  }
  /**
   * Request Processor
   *
   * Here is where we choose which spell to cast based on the URI components 
   * and querystring.
   *
   * @access public
   * @param void
   * @return void
   */
  public function processRequest () {
    if ( is_array( $this->path ) ) {
      /**
       * The value in $this->path[0] is our base API action. Remaining path 
       * elements are passed as action parameters. Ideally, each "method" in 
       * the path chain would execute and attach their result to the JSON 
       * result.
       */
      switch ( strtolower( $this->path[0] ) ) {        
        case 'search':
          $this->search( $this->path );
          break;        
        case '':
          $this->search( $this->path);
          break;
        default:
          $this->result = array(
            "error"=>400,
            "message"=>"Invalid request.",
            "details"=>$this->url
          );
          break;
      }
      if ( empty( $this->result ) ) {
        $this->result = array(
          "error"=>404,
          "message"=>"No data found matching request criteria."
        );
      }
    }
  }
  /**
   * The quickfacts URI processor
   *
   * This is where the majority of API calls will be routed through.
   *
   * @access private
   * @param void
   * @return void
   */

  /**
   * ZipCode search method
   *
   * This method searches the geography data for any that have a name beginning 
   * with the zip code string stored in $params[1]. It stores the first 25 results, 
   * ordered alphabetically and their corresponding FIPS codes in the class 
   * property $result array. If no matches are found, the class $result array 
   * remains empty signalling "no results" to the processRequest() method.
   *
   * @access private
   * @param mixed $param The URI path statements, not querystring
   * @return void
   *
   */
  private function search ( $params = null ) {
    if ( !is_null( $params ) && count( $params ) > 1 ) {
      $forZips = $this->getQueriedZips();
      $lookup = array();
      foreach($forZips as $zip){
      $query = urldecode( $zip );
      // need to filter $params[1]
      if (strtolower($query) === 'us') {
        $query = 'united states';
      }
      if(is_numeric($query)){
        $search = CBDB::query("SELECT fips, 
                    zipcode
                    FROM `zipcode_fips`             
                    WHERE length(zipcode_fips.fips)= 7 AND zipcode_fips.zipcode LIKE '%s'",$query);
 }
      else{
      $search = CBDB::query(
         "SELECT G.`fips` AS fips, 
            G.`label` AS label
          FROM `geography` AS G
          WHERE G.`label` LIKE 's%'
          AND G.`fips` != '0000000'
          ORDER BY G.`label` ASC
          ", $query);
     }
      foreach ( $search as $row ) { $lookup[$row->fips] = $row->zipcode; }
      
      }
      $this->result = array('lookup' => $lookup);
    }
  }

  /**
   * Returns an array of FIPs from the querystring
   *
   * If the user submits a comma separated list of FIPs codes to query against, 
   * this method converts that list to an array and returns it. If a $default is
   * supplied and no FIPs were passed in through the querystring, this method 
   * returns an array with a single element being the $default. If neither case 
   * is matched, this method returns a false.
   *
   * @access private
   * @param mixed $default The default FIPs to work with if no FIPs exist in the
   *                       query string. Defaults to false;
   * @return mixed An array of the FIPs in the querystring, the supplied 
   *               $default or a boolean false.
   */
  private function getQueriedZips ( $default = false ) {
    if ( !empty( $this->query['zips'] ) ) {
      return explode( ',', $this->query['zips'] );
    } else {
      return ( $default !== false ) ? array( $default ) : false;
    }
  }
}
